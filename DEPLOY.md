# Configuración de GitHub Pages para andreifaur.dev

Este proyecto se despliega automáticamente en GitHub Pages mediante GitHub Actions.

## Configuración del dominio personalizado

### 1. Configuración DNS (en tu proveedor de dominio)

Añade los siguientes registros DNS para `andreifaur.dev`:

**Registros A** (apuntando a los servidores de GitHub Pages):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Registro CNAME** (para www):
```
www.andreifaur.dev → bogdan-andrei-faur.github.io
```

### 2. Configuración en GitHub

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: selecciona "GitHub Actions"
4. Custom domain: ingresa `andreifaur.dev`
5. Marca "Enforce HTTPS" (espera a que el certificado SSL se provisione)

### 3. Verificación

Después de configurar el DNS (puede tardar hasta 48h), visita:
- https://andreifaur.dev (dominio principal)
- https://www.andreifaur.dev (redirección automática)

## Despliegue automático

El workflow `.github/workflows/deploy.yml` se ejecuta automáticamente en cada push a `main`:

1. Instala dependencias (`npm ci`)
2. Compila el proyecto (`npm run build`)
3. Despliega el contenido de `dist/` a GitHub Pages
4. El archivo `public/CNAME` asegura que el dominio personalizado persista

También puedes disparar un despliegue manual desde:
- Actions → Deploy to GitHub Pages → Run workflow

## Archivos clave

- `.github/workflows/deploy.yml` - Pipeline de CI/CD
- `public/CNAME` - Configuración del dominio personalizado
- `vite.config.ts` - `base: "/"` para despliegue en raíz
- `public/sitemap.xml` - SEO con la URL correcta
- `public/robots.txt` - Directivas para crawlers
- `index.html` - Meta tags actualizados con el dominio final
