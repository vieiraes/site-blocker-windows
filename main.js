const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const fsSync = require('fs');
const blockList = require('./blocklist');
const { execSync } = require('child_process');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 450,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        autoHideMenuBar: true,
        resizable: false
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

ipcMain.handle('block-sites', async () => {
    try {
        const hostsPath = 'C:\\Windows\\System32\\drivers\\etc\\hosts';
        const backupPath = hostsPath + '.backup';
        if (!fsSync.existsSync(backupPath)) {
            await fs.copyFile(hostsPath, backupPath);
        }

        const currentContent = await fs.readFile(hostsPath, 'utf8');

        if (!currentContent.includes('# Redes Sociais')) {
            fsSync.writeFileSync(hostsPath, currentContent + blockList.sites, {
                encoding: 'utf8',
                mode: 0o666,
                flag: 'w'
            });
            execSync('ipconfig /flushdns');
            return {
                success: true,
                message: 'Sites bloqueados com sucesso!\nVocê pode fechar esta janela.'
            };
        }

        return {
            success: true,
            message: 'Os sites já estão bloqueados.\nVocê pode fechar esta janela.'
        };
    } catch (error) {
        return {
            success: false,
            message: `Erro ao modificar o arquivo hosts.\nPor favor:\n1. Execute o programa como administrador\n2. Desative temporariamente seu antivírus\n3. Verifique se o arquivo hosts não está marcado como somente leitura\n\nDetalhes: ${error.message}`
        };
    }
});

// Função para restaurar o arquivo hosts original
ipcMain.handle('restore-hosts', async () => {
    try {
        const hostsPath = 'C:\\Windows\\System32\\drivers\\etc\\hosts';
        const backupPath = hostsPath + '.backup';

        if (fsSync.existsSync(backupPath)) {
            // Restaura do backup se existir
            fsSync.copyFileSync(backupPath, hostsPath);
        } else {
            // Se não houver backup, cria um hosts limpo
            const defaultHosts = '# Copyright (c) 1993-2009 Microsoft Corp.\n' +
                               '#\n' +
                               '# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.\n' +
                               '#\n' +
                               '# localhost name resolution is handled within DNS itself.\n' +
                               '#\n' +
                               '127.0.0.1       localhost\n' +
                               '::1             localhost\n';
            
            fsSync.writeFileSync(hostsPath, defaultHosts, {
                encoding: 'utf8',
                mode: 0o666,
                flag: 'w'
            });
        }

        // Limpa o cache DNS
        execSync('ipconfig /flushdns');

        return {
            success: true,
            message: 'Arquivo hosts restaurado com sucesso!\nVocê pode fechar esta janela.'
        };
    } catch (error) {
        return {
            success: false,
            message: `Erro ao restaurar o arquivo hosts.\nPor favor:\n1. Execute o programa como administrador\n2. Desative temporariamente seu antivírus\n3. Verifique se o arquivo hosts não está marcado como somente leitura\n\nDetalhes: ${error.message}`
        };
    }
});

ipcMain.handle('get-block-list', () => {
    return blockList.sites.split('\n')
        .map(line => {
            if (line.includes('# ')) {
                return line.trim();
            } else if (line.includes('127.0.0.1')) {
                return line.split('127.0.0.1')[1].trim();
            }
            return '';
        })
        .filter(line => line !== '');
});
