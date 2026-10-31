/**
 * Color tokens — light and dark bindings.
 *
 * Custom roleplay palette:
 *   - Dark: deep aubergine surfaces, orchid primary, rose secondary, peach tertiary.
 *   - Light: warm paper surfaces, violet primary, raspberry secondary.
 *
 * All token keys are unchanged from the original file, only values differ.
 */
import {withOpacity, stateLayerOpacity} from '../../utils/colorUtils';

import {TokenColors} from './types';

// ---------------------------------------------------------------------------
// Light
// ---------------------------------------------------------------------------
const LIGHT_PRIMARY = '#6D3FC8'; // violet
const LIGHT_SECONDARY = '#B83A72'; // raspberry
const LIGHT_TERTIARY = '#C9742E'; // amber
const LIGHT_ERROR = '#D6432A';
const LIGHT_BACKGROUND = '#FBF8F5';
const LIGHT_ON_BACKGROUND = '#241E2B';
const LIGHT_SURFACE = '#F4EFEA';
const LIGHT_ON_SURFACE = '#322A3A';
const LIGHT_INVERSE_ON_SURFACE = '#FBF8F5';
// Neutral tint used for opacity math so containers stay warm-grey, not purple.
const LIGHT_TINT = '#3A2F45';

export const lightColors: TokenColors = {
  // MD3 base palette (light)
  primary: LIGHT_PRIMARY,
  onPrimary: '#FFFFFF',
  primaryContainer: '#E9DDFF',
  onPrimaryContainer: '#2A0F5E',
  secondary: LIGHT_SECONDARY,
  onSecondary: '#FFFFFF',
  secondaryContainer: '#FFD9E6',
  onSecondaryContainer: '#4A1330',
  tertiary: LIGHT_TERTIARY,
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFE3C9',
  onTertiaryContainer: '#3D1E00',
  error: LIGHT_ERROR,
  onError: '#FFFFFF',
  errorContainer: '#FFDAD2',
  onErrorContainer: '#410A00',
  background: LIGHT_BACKGROUND,
  onBackground: LIGHT_ON_BACKGROUND,
  surface: LIGHT_SURFACE,
  onSurface: LIGHT_ON_SURFACE,
  surfaceVariant: '#E8E0EA',
  onSurfaceVariant: '#5E5468',
  outline: withOpacity(LIGHT_TINT, 0.12),
  outlineVariant: '#A99FB3',
  mutedLight: '#E9E2DC',
  secondaryDefault: '#EFE8F2',
  // MD3 extras
  surfaceDisabled: withOpacity('#FBF8F5', 0.12),
  onSurfaceDisabled: withOpacity('#322A3A', 0.38),
  inverseSurface: '#4A4152',
  inverseOnSurface: LIGHT_INVERSE_ON_SURFACE,
  inversePrimary: '#CDB4FF',
  inverseSecondary: '#F4A6C0',
  shadow: '#000000',
  scrim: 'rgba(0, 0, 0, 0.25)',
  backdrop: 'rgba(36, 30, 43, 0.6)',

  // Semantic surface variants
  surfaceContainerHighest: withOpacity(LIGHT_TINT, 0.07),
  surfaceContainerHigh: withOpacity(LIGHT_TINT, 0.05),
  surfaceContainer: withOpacity(LIGHT_TINT, 0.035),
  surfaceContainerLow: withOpacity(LIGHT_TINT, 0.02),
  surfaceContainerLowest: LIGHT_SURFACE,
  surfaceDim: withOpacity(LIGHT_TINT, 0.08),
  surfaceBright: LIGHT_SURFACE,

  // Text
  text: LIGHT_ON_BACKGROUND,
  textSecondary: withOpacity(LIGHT_ON_SURFACE, 0.6),
  inverseText: LIGHT_INVERSE_ON_SURFACE,
  inverseTextSecondary: withOpacity(LIGHT_INVERSE_ON_SURFACE, 0.6),

  // Border / placeholder
  border: withOpacity(LIGHT_TINT, 0.1),
  placeholder: withOpacity(LIGHT_ON_SURFACE, 0.4),

  // Interactive state opacities
  stateLayerOpacity: 0.12,
  hoverStateOpacity: stateLayerOpacity.hover,
  pressedStateOpacity: stateLayerOpacity.pressed,
  draggedStateOpacity: stateLayerOpacity.dragged,
  focusStateOpacity: stateLayerOpacity.focus,

  // Menu
  menuBackground: LIGHT_SURFACE,
  menuBackgroundDimmed: withOpacity(LIGHT_SURFACE, 0.9),
  menuBackgroundActive: withOpacity(LIGHT_PRIMARY, 0.12),
  menuSeparator: withOpacity(LIGHT_TINT, 0.3),
  menuGroupSeparator: withOpacity('#000000', 0.08),
  menuText: LIGHT_ON_SURFACE,
  menuDangerText: LIGHT_ERROR,

  // Messages
  authorBubbleBackground: '#EBDFFB',
  receivedMessageDocumentIcon: LIGHT_PRIMARY,
  sentMessageDocumentIcon: LIGHT_ON_SURFACE,
  userAvatarImageBackground: 'transparent',
  userAvatarNameColors: [
    LIGHT_PRIMARY,
    LIGHT_SECONDARY,
    LIGHT_TERTIARY,
    LIGHT_ERROR,
  ],
  searchBarBackground: 'rgba(90, 70, 110, 0.1)',

  // Thinking bubble
  thinkingBubbleBackground: '#F3ECFD',
  thinkingBubbleText: '#5B2FB0',
  thinkingBubbleBorder: 'rgba(109, 63, 200, 0.4)',
  thinkingBubbleShadow: '#6D3FC8',
  thinkingBubbleChevronBackground: 'rgba(109, 63, 200, 0.1)',
  thinkingBubbleChevronBorder: 'rgba(109, 63, 200, 0.2)',

  // Status bar
  bgStatusActive: '#22c55e',
  bgStatusIdle: '#d1d5db',
  statusLoaded: '#1e9e4f',

  // Buttons
  btnPrimaryBg: '#F3ECFD',
  btnPrimaryBorder: '#D8C4F7',
  btnPrimaryText: '#5B2FB0',
  btnReadyBg: '#ecfdf5',
  btnReadyBorder: '#bbf7d0',
  btnReadyText: '#047857',
  btnDownloadBg: '#ecfdf5',
  btnDownloadBorder: '#bbf7d0',
  btnDownloadText: '#047857',

  // Icons
  iconModelTypeText: '#6D3FC8',
  iconModelTypeVision: '#B83A72',
  iconModelTypeAudio: '#C9742E',

  // Accent
  accent: {
    peach: '#FFE3C9',
    greenStrong: '#7c8e8a',
  },
};

// ---------------------------------------------------------------------------
// Dark
// ---------------------------------------------------------------------------
const DARK_PRIMARY = '#C9A2F5'; // orchid
const DARK_SECONDARY = '#F4A6C0'; // rose
const DARK_TERTIARY = '#F2B88F'; // peach
const DARK_ERROR = '#FF6B4A';
const DARK_BACKGROUND = '#15111A'; // deep aubergine
const DARK_ON_BACKGROUND = '#F5EEF8';
const DARK_SURFACE = '#1E1825';
const DARK_ON_SURFACE = '#E9E0EE';
const DARK_INVERSE_ON_SURFACE = '#2A2233';

export const darkColors: TokenColors = {
  // MD3 base palette (dark)
  primary: DARK_PRIMARY,
  onPrimary: '#2A1647',
  primaryContainer: '#4A3270',
  onPrimaryContainer: '#EBDDFF',
  secondary: DARK_SECONDARY,
  onSecondary: '#4A1730',
  secondaryContainer: '#5C2B42',
  onSecondaryContainer: '#FFD9E6',
  tertiary: DARK_TERTIARY,
  onTertiary: '#4A2400',
  tertiaryContainer: '#6B3A12',
  onTertiaryContainer: '#FFDCC0',
  error: DARK_ERROR,
  onError: '#4C100D',
  errorContainer: '#661511',
  onErrorContainer: '#FFB4A5',
  background: DARK_BACKGROUND,
  onBackground: DARK_ON_BACKGROUND,
  surface: DARK_SURFACE,
  onSurface: DARK_ON_SURFACE,
  surfaceVariant: '#3A3043',
  onSurfaceVariant: '#CFC4D6',
  outline: '#4A3F55',
  outlineVariant: '#8A7F95',
  mutedLight: '#2E2638',
  secondaryDefault: '#2B2335',
  // MD3 extras
  surfaceDisabled: withOpacity('#3A3043', 0.12),
  onSurfaceDisabled: withOpacity('#E9E0EE', 0.38),
  inverseSurface: '#E9E0EE',
  inverseOnSurface: DARK_INVERSE_ON_SURFACE,
  inversePrimary: '#6D3FC8',
  inverseSecondary: LIGHT_SECONDARY,
  shadow: '#000000',
  scrim: 'rgba(0, 0, 0, 0.35)',
  backdrop: 'rgba(21, 17, 26, 0.8)',

  // Semantic surface variants
  surfaceContainerHighest: '#352C40',
  surfaceContainerHigh: '#2D2537',
  surfaceContainer: '#262030',
  surfaceContainerLow: '#1E1825',
  surfaceContainerLowest: '#110D16',
  surfaceDim: '#110D16',
  surfaceBright: '#3A3043',

  // Text
  text: DARK_ON_BACKGROUND,
  textSecondary: withOpacity(DARK_ON_SURFACE, 0.6),
  inverseText: DARK_INVERSE_ON_SURFACE,
  inverseTextSecondary: withOpacity(DARK_INVERSE_ON_SURFACE, 0.6),

  // Border / placeholder
  border: withOpacity(DARK_ON_SURFACE, 0.1),
  placeholder: withOpacity(DARK_ON_SURFACE, 0.4),

  // Interactive state opacities
  stateLayerOpacity: 0.12,
  hoverStateOpacity: stateLayerOpacity.hover,
  pressedStateOpacity: stateLayerOpacity.pressed,
  draggedStateOpacity: stateLayerOpacity.dragged,
  focusStateOpacity: stateLayerOpacity.focus,

  // Menu
  menuBackground: '#241C2D',
  menuBackgroundDimmed: withOpacity(DARK_SURFACE, 0.9),
  menuBackgroundActive: withOpacity(DARK_PRIMARY, 0.14),
  menuSeparator: withOpacity(DARK_PRIMARY, 0.4),
  menuGroupSeparator: withOpacity('#FFFFFF', 0.08),
  menuText: DARK_ON_SURFACE,
  menuDangerText: DARK_ERROR,

  // Messages
  authorBubbleBackground: '#3B2D52',
  receivedMessageDocumentIcon: DARK_PRIMARY,
  sentMessageDocumentIcon: DARK_ON_SURFACE,
  userAvatarImageBackground: 'transparent',
  userAvatarNameColors: [
    DARK_PRIMARY,
    DARK_SECONDARY,
    DARK_TERTIARY,
    DARK_ERROR,
  ],
  searchBarBackground: 'rgba(38, 32, 48, 0.92)',

  // Thinking bubble
  thinkingBubbleBackground: '#2A2036',
  thinkingBubbleText: '#D9BCFA',
  thinkingBubbleBorder: 'rgba(201, 162, 245, 0.5)',
  thinkingBubbleShadow: '#C9A2F5',
  thinkingBubbleChevronBackground: 'rgba(201, 162, 245, 0.15)',
  thinkingBubbleChevronBorder: 'rgba(201, 162, 245, 0.3)',

  // Status bar
  bgStatusActive: '#22c55e',
  bgStatusIdle: '#4b5563',
  statusLoaded: '#34c768',

  // Buttons
  btnPrimaryBg: '#2A2038',
  btnPrimaryBorder: '#43305E',
  btnPrimaryText: '#D9BFFF',
  btnReadyBg: '#052e16',
  btnReadyBorder: '#166534',
  btnReadyText: '#6ee7b7',
  btnDownloadBg: '#0a1f17',
  btnDownloadBorder: '#143d2d',
  btnDownloadText: '#34d399',

  // Icons
  iconModelTypeText: '#C9A2F5',
  iconModelTypeVision: '#F4A6C0',
  iconModelTypeAudio: '#F2B88F',

  // Accent
  accent: {
    peach: '#6B3A12',
    greenStrong: '#7c8e8a',
  },
};
