export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: '#ghostVPN',
      description: 'Инструкция по настройке ghostVPN на разных устройствах',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: '#ghostVPN',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      nav: [],
      links: [],
    },
    aside: {
      useLevel: false,
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
        icon: 'system-uicons:paper-plane',
        to: 'https://t.me/vpnghostbot',
        target: '_blank',
      }],
    },
    search: {
      enable: false,
      inAside: false,
    }
  }
});