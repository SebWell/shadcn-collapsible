export default {
  editor: {
    label: {
      en: 'Collapsible',
      fr: 'Pliable'
    },
    icon: 'chevrons-up-down',
    bubble: {
      icon: 'chevrons-up-down'
    }
  },
  triggerEvents: [
    { name: 'toggle', label: { en: 'On toggle', fr: 'Lors du basculement' } },
    { name: 'open', label: { en: 'On open', fr: 'Lors de l\'ouverture' } },
    { name: 'close', label: { en: 'On close', fr: 'Lors de la fermeture' } }
  ],
  properties: {
    // Contenu
    triggerText: {
      label: { en: 'Trigger text', fr: 'Texte du déclencheur' },
      type: 'Text',
      defaultValue: 'Click to toggle',
      bindable: true,
      multiLang: true,
      section: 'content'
    },
    defaultContent: {
      label: { en: 'Default content', fr: 'Contenu par défaut' },
      type: 'LongText',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'content'
    },
    
    // État
    defaultOpen: {
      label: { en: 'Default open', fr: 'Ouvert par défaut' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'state'
    },
    disabled: {
      label: { en: 'Disabled', fr: 'Désactivé' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'state'
    },
    
    // Apparence du déclencheur
    triggerVariant: {
      label: { en: 'Trigger variant', fr: 'Variante du déclencheur' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'outline', label: { en: 'Outline', fr: 'Contour' } },
          { value: 'ghost', label: { en: 'Ghost', fr: 'Fantôme' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'trigger'
    },
    showTriggerIcon: {
      label: { en: 'Show trigger icon', fr: 'Afficher l\'icône du déclencheur' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'trigger'
    },
    
    // Badge
    showBadge: {
      label: { en: 'Show badge', fr: 'Afficher le badge' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'badge'
    },
    badgeText: {
      label: { en: 'Badge text', fr: 'Texte du badge' },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'badge'
    },
    
    // Contenu
    contentPadding: {
      label: { en: 'Content padding', fr: 'Espacement du contenu' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'contentStyle'
    },
    contentBackground: {
      label: { en: 'Content background', fr: 'Arrière-plan du contenu' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'contentStyle'
    },
    
    // Animation
    animation: {
      label: { en: 'Animation', fr: 'Animation' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'fade', label: { en: 'Fade', fr: 'Fondu' } },
          { value: 'slide', label: { en: 'Slide', fr: 'Glissement' } },
          { value: 'scale', label: { en: 'Scale', fr: 'Mise à l\'échelle' } }
        ]
      },
      defaultValue: 'slide',
      bindable: true,
      section: 'animation'
    },
    
    // Classes CSS personnalisées
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      section: 'style'
    },
    triggerClass: {
      label: { en: 'Trigger CSS class', fr: 'Classe CSS du déclencheur' },
      type: 'Text',
      section: 'style'
    },
    contentClass: {
      label: { en: 'Content CSS class', fr: 'Classe CSS du contenu' },
      type: 'Text',
      section: 'style'
    },
    textClass: {
      label: { en: 'Text CSS class', fr: 'Classe CSS du texte' },
      type: 'Text',
      section: 'style'
    }
  },
  
  defaultContent: {
    triggerText: 'Click to toggle',
    defaultContent: '',
    defaultOpen: false,
    disabled: false,
    triggerVariant: 'default',
    showTriggerIcon: true,
    showBadge: false,
    badgeText: '',
    contentPadding: true,
    contentBackground: false,
    animation: 'slide',
    customClass: '',
    triggerClass: '',
    contentClass: '',
    textClass: ''
  },
  
  settingsOptions: {
    autoByContent: true
  },
  
  actions: [
    {
      label: { en: 'Toggle', fr: 'Basculer' },
      action: 'toggle'
    },
    {
      label: { en: 'Open', fr: 'Ouvrir' },
      action: 'open'
    },
    {
      label: { en: 'Close', fr: 'Fermer' },
      action: 'close'
    }
  ]
} 