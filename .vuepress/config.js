module.exports = {
  base: '/wc-cheatsheet/',
  markdown: {
    lineNumbers: true,
    // config: md => {
    //   // use more markdown-it plugins!
    //   md.use(require('markdown-it-math'))
    // }
  },
  themeConfig: {
    repo: 'HaiwangYu/wc-cheatsheet',
    repoLabel: 'GitHub',
    editLinks: true,
    logo: "/img/logo.png",
    nav: [
        { text: 'Main',link: '/' },
    ],
    sidebar: {
      '/': [
        'cuda-dev',
         'rootlogon',
         'build-libtorch',
         'docker-quick-start',
         'singularity-with-cuda',
         'hdf5',
         'gdb',
         'git',
         'make-ups',
         'lar-cmd',
         'larsoft-update-with-new-release',
         'sim-track-eval',
         'install-wirecell-sigularity',
         'install-cvmfs-singularity',
         'install-root',
         'using-vscode',
      ]
    },
    sidebarDepth: 1,
    lastUpdated: 'Last Updated'
  },
  title: "wc-cheatsheet",
  description: "Welcome to wc-cheatsheet",
}
