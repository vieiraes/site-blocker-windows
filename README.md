# Projeto de Bloqueio de Sites

## 🎯 Descrição
Este é um projeto de extensão para navegador que permite bloquear sites específicos, ajudando a manter o foco e a produtividade durante o trabalho ou estudos.

## ✨ Funcionalidades
- Bloqueio de sites específicos
- Interface simples e intuitiva
- Personalização da lista de sites bloqueados
- Fácil ativação/desativação do bloqueio

## 🛠️ Instalação

### Modo Extensão
1. Clone este repositório
2. Abra seu navegador
3. Vá para a página de extensões
4. Ative o "Modo desenvolvedor"
5. Clique em "Carregar sem compactação"
6. Selecione a pasta do projeto

### Compilando para Windows
1. Certifique-se de ter o Node.js instalado (versão 16 ou superior)
2. Abra o terminal na pasta do projeto
3. Instale as dependências necessárias:
```bash
npm install
```
4. Compile o aplicativo:
```bash
npm run build
```
5. Execute o aplicativo:
```bash
npm run start
```

## 🎮 Como Usar

### Modo Extensão
1. Clique no ícone da extensão na barra de ferramentas
2. Adicione sites à lista de bloqueio
3. Configure o período de bloqueio
4. Ative o bloqueador

### Modo Desktop
1. Execute siteblocker.exe como administrador
2. Configure suas preferências no painel de controle
3. O programa modificará automaticamente o arquivo hosts

## 📋 Sites Bloqueados por Padrão
### Redes Sociais
- Facebook (facebook.com)
- Instagram (instagram.com)
- Twitter/X (twitter.com)
- TikTok (tiktok.com)
- LinkedIn (linkedin.com)

### Entretenimento
- YouTube (youtube.com)
- Netflix (netflix.com)
- Twitch (twitch.tv)
- Reddit (reddit.com)
- Pinterest (pinterest.com)

### Comunicação
- WhatsApp Web (web.whatsapp.com)
- Telegram Web (web.telegram.org)
- Discord (discord.com)
- Messenger (messenger.com)

## ⚙️ Configurações Avançadas
- Modo Força Total: Impossibilita a desativação durante períodos definidos
- Whitelist: Permite exceções em sites específicos
- Sincronização em Nuvem: Mantém suas configurações em todos os dispositivos
- Modo Pomodoro Integrado: Alterna automaticamente períodos de foco e pausa
- Backup Automático: Salva suas configurações localmente

## 💻 Requisitos do Sistema
### Para Extensão
- Google Chrome 88+
- Mozilla Firefox 78+
- Microsoft Edge 88+

### Para Aplicativo Windows
- Windows 8/10/11
- 4GB RAM
- Node.js v16+
- Privilégios de administrador

## 🤝 Contribuição
1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ⚠️ Avisos Importantes
- O aplicativo modifica o arquivo hosts do sistema
- Faça backup do arquivo hosts original antes de usar
- Execute sempre como administrador no Windows
- Algumas configurações podem requerer reinicialização do sistema

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
