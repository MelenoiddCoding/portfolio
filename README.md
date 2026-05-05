# Portafolio con Astro + GitHub Pages

## 1) Instalar dependencias

```bash
npm install
```

## 2) Ejecutar en local

```bash
npm run dev
```

## 3) Configurar para tu cuenta

Edita `astro.config.mjs`:

- `site`: `https://TU_USUARIO.github.io`
- `base`: `/${repo}` donde `repo` es el nombre de tu repositorio.

## 4) Publicar

1. Sube el repo a GitHub.
2. Asegúrate de que la rama por defecto sea `main`.
3. En **Settings → Pages**, selecciona **GitHub Actions** como source.
4. Haz push y el workflow publicará en GitHub Pages.

## Personalización rápida

- Edita los datos personales y proyectos en `src/pages/index.astro`.
- Ajusta estilos en `src/styles/global.css`.
