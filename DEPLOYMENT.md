# Guía de Deployment - LibreShield

Este documento proporciona instrucciones para desplegar LibreShield en diferentes plataformas de alojamiento.

---

## 📋 Requisitos Previos

- **Node.js** v18 o superior
- **npm** o **yarn** para gestionar dependencias
- Acceso a la plataforma de alojamiento elegida

---

## 🚀 Opciones de Deployment

### 1. **Replit (Recomendado para desarrollo)**

LibreShield ya está configurado para Replit con soporte 24/7.

**Pasos:**
1. Conecta tu repositorio de GitHub a Replit
2. El servidor se levantará automáticamente
3. Accede a través del URL público de Replit
4. Para agregar dominio personalizado, ve a Publish → Custom Domain

---

### 2. **Vercel (Recomendado para producción)**

**Archivo de configuración:** `vercel.json` ✅ Ya incluido

**Pasos:**
1. Conecta tu repositorio en https://vercel.com
2. Vercel detectará automáticamente la configuración en `vercel.json`
3. Haz clic en "Deploy"
4. Tu app estará en línea en segundos

**Ventajas:**
- Deployment automático en cada push a GitHub
- CDN global incluido
- Dominio personalizado gratis
- HTTPS automático
- Muy rápido

---

### 3. **Netlify**

**Archivo de configuración:** `netlify.toml` ✅ Ya incluido

**Pasos:**
1. Ve a https://netlify.com
2. Conecta tu repositorio de GitHub
3. Netlify leerá automáticamente `netlify.toml`
4. Haz clic en "Deploy"

**Ventajas:**
- Fácil de usar
- Soporte excelente
- Dominio personalizado
- HTTPS automático

---

### 4. **Render**

**Archivo de configuración:** `render.yaml` ✅ Ya incluido

**Pasos:**
1. Ve a https://render.com
2. Conecta tu repositorio de GitHub
3. Render detectará y usará `render.yaml`
4. Selecciona "Deploy"

**Ventajas:**
- Hosting gratuito disponible
- Deployments automáticos
- Soporte para variables de entorno

---

### 5. **Docker (Cualquier servidor)**

LibreShield incluye configuración Docker para máxima flexibilidad.

**Archivos proporcionados:**
- `Dockerfile` - Imagen de producción optimizada
- `docker-compose.yml` - Orquestación local

**Para ejecutar localmente:**
```bash
docker-compose up --build
```

**Para desplegar en producción:**
```bash
# Construir imagen
docker build -t libreshield:latest .

# Ejecutar contenedor
docker run -p 5000:5000 \
  -e NODE_ENV=production \
  -e PORT=5000 \
  libreshield:latest
```

**Soportado en:**
- Docker Hub
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- Cualquier servidor con Docker

---

### 6. **Heroku (Gratuito con limitaciones)**

**Archivo de configuración:** `Procfile` ✅ Ya incluido

**Pasos:**
```bash
# Instala Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Conecta tu repositorio
heroku login
heroku create libreshield  # Reemplaza con tu nombre
git push heroku main

# Tu app está en línea en: libreshield.herokuapp.com
```

---

### 7. **AWS (EC2, Elastic Beanstalk, Lightsail)**

**Opción A: EC2 + Manual**
```bash
# SSH a tu instancia
ssh -i your-key.pem ubuntu@your-instance-ip

# Clona el repositorio
git clone https://github.com/SilentBlox01/LibreShield.git
cd LibreShield

# Instala Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instala dependencias y construye
npm install
npm run build

# Usa PM2 para mantenerlo corriendo 24/7
npm install -g pm2
pm2 start server.js --name "libreshield"
pm2 startup
pm2 save
```

**Opción B: Elastic Beanstalk**
```bash
# Instala EB CLI
pip install awsebcli

# Crea y despliega
eb init -p node.js-20 libreshield
eb create libreshield-env
eb deploy
```

---

### 8. **Railway**

1. Ve a https://railway.app
2. Conecta GitHub
3. Selecciona tu repositorio
4. Railway detectará automáticamente Node.js
5. Configura variable de entorno `PORT=5000`
6. Deploy automático

---

### 9. **Fly.io**

**Pasos:**
```bash
# Instala Fly CLI
curl -L https://fly.io/install.sh | sh

# Crea app
fly auth login
fly launch

# Despliega
fly deploy
```

---

### 10. **Servidor Propio (VPS/Dedidacado)**

**Con Nginx + PM2:**
```bash
# En tu VPS
sudo apt-get update && sudo apt-get upgrade -y

# Instala Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clona el repositorio
git clone https://github.com/SilentBlox01/LibreShield.git
cd LibreShield

# Instala y construye
npm install
npm run build

# Instala PM2 globalmente
npm install -g pm2

# Inicia la app
pm2 start server.js --name "libreshield"
pm2 startup
pm2 save

# Instala Nginx como reverse proxy
sudo apt-get install -y nginx

# Configura Nginx
sudo nano /etc/nginx/sites-available/default

# Añade esto:
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Reinicia Nginx
sudo systemctl restart nginx

# Instala SSL (Let's Encrypt)
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d tu-dominio.com
```

---

## 📊 Comparativa de Plataformas

| Plataforma | Costo | Facilidad | Velocidad | Soportado |
|-----------|-------|----------|----------|-----------|
| **Vercel** | Gratis/Pago | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| **Netlify** | Gratis/Pago | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| **Render** | Gratis/Pago | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| **Railway** | Gratis/Pago | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| **Heroku** | Pago | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ |
| **AWS** | Pago | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| **Docker/VPS** | Pago | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| **Replit** | Gratis/Pago | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ |

---

## 🔐 Variables de Entorno

Cada plataforma permite configurar variables de entorno. Copia `.env.example` a `.env` y configura:

```bash
NODE_ENV=production
PORT=5000
APP_URL=https://tu-dominio.com
```

---

## ✅ Checklist Pre-Deployment

- [ ] Código commiteado en GitHub
- [ ] `npm run build` funciona sin errores
- [ ] Variables de entorno configuradas
- [ ] Dominio personalizado configurado (opcional)
- [ ] SSL/HTTPS habilitado
- [ ] Headers de seguridad activos (ya incluidos)

---

## 🆘 Troubleshooting

**Port 5000 en uso:**
```bash
kill $(lsof -t -i:5000)
```

**Build fallido:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**App no inicia:**
```bash
# Revisa logs
pm2 logs libreshield

# O en Docker
docker logs container-id
```

---

## 📞 Soporte

- GitHub Issues: https://github.com/SilentBlox01/LibreShield/issues
- Documentación: Consulta README.md

---

**¡LibreShield es flexible y puede ejecutarse en cualquier parte! 🚀**
