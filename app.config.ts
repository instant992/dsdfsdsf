export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'shadcn-docs-nuxt',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'shadcn-docs-starter',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: '#ghostVPN © 2023-2025. Сюда и так никто не посмотрит',
      links: [{
        icon: '🦊',
        to: 'https://t.me/Ghost552',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'На этой странице',
      links: [{
        title: 'Купить подписку',
        icon: '👻',
        to: 'https://t.me/vpnghostbot',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});