# 💻 MJI Portfolio - Software Developer

Portfolio personal desarrollado con React para mostrar mis proyectos, habilidades y experiencia como desarrollador Full Stack.

**Tecnologías:** React 19 | Vite | Bootstrap 5 | PHP | PHPMailer

## 🌐 Demo

[https://mji.imperial-net.com](https://mji.imperial-net.com)

## ✨ Características

- **Diseño moderno y responsive** - Adaptado a todos los dispositivos
- **Animaciones suaves** - Usando AOS (Animate On Scroll)
- **Formulario de contacto funcional** - Con servicio de email PHP integrado
- **Sección de proyectos** - Con cards interactivas y enlaces a repositorios
- **Sección de habilidades** - Tecnologías y soft skills
- **Tema oscuro** - Diseño elegante con colores #61dbfb y #1a1a2e

## 🛠️ Tecnologías

### Frontend
- React 19
- Vite
- Bootstrap 5
- React Icons
- AOS (Animate On Scroll)
- SweetAlert2

### Backend (Email Service)
- PHP 8.x
- PHPMailer
- SMTP (Hostinger)

## 📁 Estructura del Proyecto

```
my-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   ├── cv/
│   │   └── img/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── SocialSidebar.jsx
│   │   └── ...
│   ├── hooks/
│   │   └── useContactForm.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── services/          # Módulo de email reutilizable
│   │   ├── api/
│   │   │   └── _send-email.php
│   │   ├── email/
│   │   │   ├── EmailService.php
│   │   │   ├── PHPMailer/
│   │   │   └── templates/
│   │   └── php/
│   │       ├── config/
│   │       └── utils/
│   └── styles/
├── .env                   # Variables de entorno (no incluido en repo)
├── .gitignore
├── package.json
└── vite.config.js
```

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/MichaelIllescas/my-portfolio.git
cd my-portfolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear archivo `.env` en la raíz del proyecto:
```env
# CONFIGURACIÓN SMTP
SMTP_HOST=smtp.tuservidor.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=tu@email.com
SMTP_PASS=tu_password

# CONFIGURACIÓN DE EMAILS
RECIPIENT_EMAIL=tu@email.com

# CONFIGURACIÓN GENERAL
NODE_ENV=development
DEBUG=true
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

### 5. Build para producción
```bash
npm run build
```

## 📧 Servicio de Email

El módulo de email en `src/services/` es completamente reutilizable. Para usarlo en otro proyecto:

1. Copiar la carpeta `services/` completa
2. Configurar el archivo `.env` con tus credenciales SMTP
3. Ajustar las plantillas en `services/email/templates/`
4. Modificar `services/php/config/mail.php` con los datos de tu app

## 🎨 Personalización

### Colores principales
Los colores del tema están definidos en `src/index.css`:
- Primary: `#61dbfb` (cyan)
- Background: `#1a1a2e` (dark blue)
- Card: `#16213e`

### Información personal
Actualizar en los siguientes archivos:
- `src/pages/Home.jsx` - Información del hero
- `src/pages/About.jsx` - Biografía y experiencia
- `src/pages/Projects.jsx` - Lista de proyectos
- `src/services/php/config/mail.php` - Datos de la app para emails

## 📱 Secciones

1. **Home** - Hero con presentación y call-to-action
2. **Sobre mí** - Biografía, estadísticas y experiencia
3. **Proyectos** - Grid de proyectos con tecnologías y enlaces
4. **Habilidades** - Tecnologías técnicas y soft skills
5. **Contacto** - Formulario funcional con validación

## 📄 Licencia

MIT License - Libre para uso personal y comercial.

## 👨‍💻 Autor

**Michael Jonathan Illescas**
- Portfolio: [mji.imperial-net.com](https://mji.imperial-net.com)
- GitHub: [@MichaelIllescas](https://github.com/MichaelIllescas)
- LinkedIn: [Michael Illescas](https://linkedin.com/in/michael-jonathan-illescas)

---

⭐ Si te gustó este proyecto, no olvides dejar una estrella en el repositorio.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
