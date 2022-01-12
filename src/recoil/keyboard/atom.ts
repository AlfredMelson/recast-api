import { atom } from 'recoil'

/**
 * @name keyCodeAtom
 * @description
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [keyCode, setKeyCode] = useRecoilState(keyCodeAtom)
 * const setKeyCode = useSetRecoilState(keyCodeAtom)
 * const keyCode = useRecoilValue(keyCodeAtom)
 * const resetKeyCode = useResetRecoilState(keyCodeAtom)
 */

export const keyCodeAtom = atom<KeyCodeEnum | null>({
  key: 'keyCode',
  default: null,
})

enum KeyCodeEnum {
  Backspace = 8,
  Tab = 9,
  Eenter = 13,
  Shift = 16,
  Ctrl = 17,
  Alt = 18,
  PauseBreak = 19,
  CapsLock = 20,
  Escape = 27,
  PageUp = 33,
  PageDown = 34,
  End = 35,
  Home = 36,
  LeftArrow = 37,
  UpArrow = 38,
  RightArrow = 39,
  DownArrow = 40,
  Insert = 45,
  Delete = 46,
  alphanumeric0 = 48,
  alphanumeric1 = 49,
  alphanumeric2 = 50,
  alphanumeric3 = 51,
  alphanumeric4 = 52,
  alphanumeric5 = 53,
  alphanumeric6 = 54,
  alphanumeric7 = 55,
  alphanumeric8 = 56,
  alphanumeric9 = 57,
  alphanumericA = 65,
  alphanumericB = 66,
  alphanumericC = 67,
  alphanumericD = 68,
  alphanumericE = 69,
  alphanumericF = 70,
  alphanumericG = 71,
  alphanumericH = 72,
  alphanumericI = 73,
  alphanumericJ = 74,
  alphanumericK = 75,
  alphanumericL = 76,
  alphanumericM = 77,
  alphanumericN = 78,
  alphanumericO = 79,
  alphanumericP = 80,
  alphanumericQ = 81,
  alphanumericR = 82,
  alphanumericS = 83,
  alphanumericT = 84,
  alphanumericU = 85,
  alphanumericV = 86,
  alphanumericW = 87,
  alphanumericX = 88,
  alphanumericY = 89,
  alphanumericZ = 90,
  LeftWindowKey = 91,
  RightWindowKey = 92,
  SelectKey = 93,
  Numpad0 = 96,
  Numpad1 = 97,
  Numpad2 = 98,
  Numpad3 = 99,
  Numpad4 = 100,
  Numpad5 = 101,
  Numpad6 = 102,
  Numpad7 = 103,
  Numpad8 = 104,
  Numpad9 = 105,
  Multiply = 106,
  Add = 107,
  Subtract = 109,
  DecimalPoint = 110,
  Divide = 111,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  NumLock = 144,
  ScrollLock = 145,
  SemiColon = 186,
  EqualSign = 187,
  Comma = 188,
  Dash = 189,
  Period = 190,
  Forward_slash = 191,
  Grave_accent = 192,
  Open_bracket = 219,
  Back_slash = 220,
  Close_braket = 221,
  Single_quote = 222,
}