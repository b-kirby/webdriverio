/**
 * !!! PLEASE DO NOT EDIT THIS FILE !!!
 *
 * This source file, even though checked in, is auto-generated based on the
 * current development within the WebDriver Bidi spec. Any changes to this
 * file need to come from the specification. You can generate this file by calling
 *
 * ```
 * $ npm run generate:bidi
 * ```
 *
 * from the project root. You can find the scripts that generates this file in
 * ./scripts/bidi/**
 */

export interface Command {
  id: JsUint;
}

export type CommandData = BrowserCommand | BrowsingContextCommand | InputCommand | NetworkCommand | ScriptCommand | SessionCommand;
export interface EmptyParams extends Extensible {}
export type Extensible = Record<string, any>;
export type JsInt = number;
export type JsUint = number;
export type SessionCommand = SessionEnd | SessionNew | SessionStatus | SessionSubscribe | SessionUnsubscribe;

export interface SessionCapabilitiesRequest {
  alwaysMatch?: SessionCapabilityRequest;
  firstMatch?: SessionCapabilityRequest[];
}

export interface SessionCapabilityRequest extends Extensible {
  acceptInsecureCerts?: boolean;
  browserName?: string;
  browserVersion?: string;
  platformName?: string;
  proxy?: {
    proxyType?: 'pac' | 'direct' | 'autodetect' | 'system' | 'manual';
    proxyAutoconfigUrl?: string;
    ftpProxy?: string;
    httpProxy?: string;
    noProxy?: string[];
    sslProxy?: string;
    socksProxy?: string;
    socksVersion?: number;
  };
}

export interface SessionSubscriptionRequest {
  events: string[];
  contexts?: BrowsingContextBrowsingContext[];
}

export interface SessionStatus extends Command {
  method: 'session.status';
  params: EmptyParams;
}

export interface SessionNew extends Command {
  method: 'session.new';
  params: SessionNewParameters;
}

export interface SessionNewParameters {
  capabilities: SessionCapabilitiesRequest;
}

export interface SessionEnd extends Command {
  method: 'session.end';
  params: EmptyParams;
}

export interface SessionSubscribe extends Command {
  method: 'session.subscribe';
  params: SessionSubscriptionRequest;
}

export interface SessionUnsubscribe extends Command {
  method: 'session.unsubscribe';
  params: SessionSubscriptionRequest;
}

export interface BrowserCommand extends BrowserClose {}

export interface BrowserClose extends Command {
  method: 'browser.close';
  params: EmptyParams;
}

export type BrowsingContextCommand = BrowsingContextActivate | BrowsingContextCaptureScreenshot | BrowsingContextClose | BrowsingContextCreate | BrowsingContextGetTree | BrowsingContextHandleUserPrompt | BrowsingContextLocateNodes | BrowsingContextNavigate | BrowsingContextPrint | BrowsingContextReload | BrowsingContextSetViewport | BrowsingContextTraverseHistory;
export type BrowsingContextBrowsingContext = string;
export type BrowsingContextLocator = BrowsingContextCssLocator | BrowsingContextInnerTextLocator | BrowsingContextXPathLocator;

export interface BrowsingContextCssLocator {
  type: 'css';
  value: string;
}

export interface BrowsingContextInnerTextLocator {
  type: 'innerText';
  value: string;
  ignoreCase?: boolean;
  matchType?: 'full' | 'partial';
  maxDepth?: JsUint;
}

export interface BrowsingContextXPathLocator {
  type: 'xpath';
  value: string;
}

export type BrowsingContextNavigation = string;
export type BrowsingContextReadinessState = 'none' | 'interactive' | 'complete';

export interface BrowsingContextActivate extends Command {
  method: 'browsingContext.activate';
  params: BrowsingContextActivateParameters;
}

export interface BrowsingContextActivateParameters {
  context: BrowsingContextBrowsingContext;
}

export interface BrowsingContextCaptureScreenshot extends Command {
  method: 'browsingContext.captureScreenshot';
  params: BrowsingContextCaptureScreenshotParameters;
}

export interface BrowsingContextCaptureScreenshotParameters {
  context: BrowsingContextBrowsingContext;
  /**
   * @default 'viewport'
   */
  origin?: 'viewport' | 'document';
  format?: BrowsingContextImageFormat;
  clip?: BrowsingContextClipRectangle;
}

export interface BrowsingContextImageFormat {
  type: string;
  quality?: number;
}

export type BrowsingContextClipRectangle = BrowsingContextBoxClipRectangle | BrowsingContextElementClipRectangle;

export interface BrowsingContextElementClipRectangle {
  type: 'element';
  element: ScriptSharedReference;
}

export interface BrowsingContextBoxClipRectangle {
  type: 'box';
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BrowsingContextClose extends Command {
  method: 'browsingContext.close';
  params: BrowsingContextCloseParameters;
}

export interface BrowsingContextCloseParameters {
  context: BrowsingContextBrowsingContext;
  promptUnload?: boolean;
}

export interface BrowsingContextCreate extends Command {
  method: 'browsingContext.create';
  params: BrowsingContextCreateParameters;
}

export type BrowsingContextCreateType = 'tab' | 'window';

export interface BrowsingContextCreateParameters {
  type: BrowsingContextCreateType;
  referenceContext?: BrowsingContextBrowsingContext;
  background?: boolean;
}

export interface BrowsingContextGetTree extends Command {
  method: 'browsingContext.getTree';
  params: BrowsingContextGetTreeParameters;
}

export interface BrowsingContextGetTreeParameters {
  maxDepth?: JsUint;
  root?: BrowsingContextBrowsingContext;
}

export interface BrowsingContextHandleUserPrompt extends Command {
  method: 'browsingContext.handleUserPrompt';
  params: BrowsingContextHandleUserPromptParameters;
}

export interface BrowsingContextHandleUserPromptParameters {
  context: BrowsingContextBrowsingContext;
  accept?: boolean;
  userText?: string;
}

export interface BrowsingContextLocateNodes extends Command {
  method: 'browsingContext.locateNodes';
  params: BrowsingContextLocateNodesParameters;
}

export interface BrowsingContextLocateNodesParameters {
  context: BrowsingContextBrowsingContext;
  locator: BrowsingContextLocator;
  maxNodeCount?: JsUint;
  ownership?: ScriptResultOwnership;
  sandbox?: string;
  serializationOptions?: ScriptSerializationOptions;
  startNodes?: ScriptSharedReference[];
}

export interface BrowsingContextNavigate extends Command {
  method: 'browsingContext.navigate';
  params: BrowsingContextNavigateParameters;
}

export interface BrowsingContextNavigateParameters {
  context: BrowsingContextBrowsingContext;
  url: string;
  wait?: BrowsingContextReadinessState;
}

export interface BrowsingContextPrint extends Command {
  method: 'browsingContext.print';
  params: BrowsingContextPrintParameters;
}

export interface BrowsingContextPrintParameters {
  context: BrowsingContextBrowsingContext;
  background?: boolean;
  margin?: BrowsingContextPrintMarginParameters;
  /**
   * @default 'portrait'
   */
  orientation?: 'portrait' | 'landscape';
  page?: BrowsingContextPrintPageParameters;
  pageRanges?: (JsUint | string)[];
  /**
   * @default 1
   */
  scale?: number;
  /**
   * @default true
   */
  shrinkToFit?: boolean;
}

export // Minimum size is 1pt x 1pt. Conversion follows from
// https://www.w3.org/TR/css3-values/#absolute-lengths
interface BrowsingContextPrintMarginParameters {
  /**
   * @default 1
   */
  bottom?: number;
  /**
   * @default 1
   */
  left?: number;
  /**
   * @default 1
   */
  right?: number;
  /**
   * @default 1
   */
  top?: number;
}

export interface BrowsingContextPrintPageParameters {
  /**
   * @default 27.94
   */
  height?: number;
  /**
   * @default 21.59
   */
  width?: number;
}

export interface BrowsingContextReload extends Command {
  method: 'browsingContext.reload';
  params: BrowsingContextReloadParameters;
}

export interface BrowsingContextReloadParameters {
  context: BrowsingContextBrowsingContext;
  ignoreCache?: boolean;
  wait?: BrowsingContextReadinessState;
}

export interface BrowsingContextSetViewport extends Command {
  method: 'browsingContext.setViewport';
  params: BrowsingContextSetViewportParameters;
}

export interface BrowsingContextSetViewportParameters {
  context: BrowsingContextBrowsingContext;
  viewport?: BrowsingContextViewport | null;
  devicePixelRatio?: number | null;
}

export interface BrowsingContextViewport {
  width: JsUint;
  height: JsUint;
}

export interface BrowsingContextTraverseHistory extends Command {
  method: 'browsingContext.traverseHistory';
  params: BrowsingContextTraverseHistoryParameters;
}

export interface BrowsingContextTraverseHistoryParameters {
  context: BrowsingContextBrowsingContext;
  delta: JsInt;
}

export type NetworkCommand = NetworkAddIntercept | NetworkContinueRequest | NetworkContinueResponse | NetworkContinueWithAuth | NetworkFailRequest | NetworkProvideResponse | NetworkRemoveIntercept;

export interface NetworkAuthCredentials {
  type: 'password';
  username: string;
  password: string;
}

export type NetworkBytesValue = NetworkStringValue | NetworkBase64Value;

export interface NetworkStringValue {
  type: 'string';
  value: string;
}

export interface NetworkBase64Value {
  type: 'base64';
  value: string;
}

export interface NetworkCookie {
  name: string;
  value: NetworkBytesValue;
  domain: string;
  path: string;
  size: JsUint;
  httpOnly: boolean;
  secure: boolean;
  sameSite: 'strict' | 'lax' | 'none';
  expiry?: JsUint;
}

export interface NetworkCookieHeader {
  name: string;
  value: NetworkBytesValue;
}

export interface NetworkHeader {
  name: string;
  value: NetworkBytesValue;
}

export type NetworkIntercept = string;
export type NetworkRequest = string;

export interface NetworkSetCookieHeader {
  name: string;
  value: NetworkBytesValue;
  domain?: string;
  httpOnly?: boolean;
  expiry?: string;
  maxAge?: JsInt;
  path?: string;
  sameSite?: 'strict' | 'lax' | 'none';
  secure?: boolean;
}

export type NetworkUrlPattern = NetworkUrlPatternPattern | NetworkUrlPatternString;

export interface NetworkUrlPatternPattern {
  type: 'pattern';
  protocol?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
}

export interface NetworkUrlPatternString {
  type: 'string';
  pattern: string;
}

export interface NetworkAddIntercept extends Command {
  method: 'network.addIntercept';
  params: NetworkAddInterceptParameters;
}

export interface NetworkAddInterceptParameters {
  phases: NetworkInterceptPhase[];
  urlPatterns?: NetworkUrlPattern[];
}

export type NetworkInterceptPhase = 'beforeRequestSent' | 'responseStarted' | 'authRequired';

export interface NetworkContinueRequest extends Command {
  method: 'network.continueRequest';
  params: NetworkContinueRequestParameters;
}

export interface NetworkContinueRequestParameters {
  request: NetworkRequest;
  body?: NetworkBytesValue;
  cookies?: NetworkCookieHeader[];
  headers?: NetworkHeader[];
  method?: string;
  url?: string;
}

export interface NetworkContinueResponse extends Command {
  method: 'network.continueResponse';
  params: NetworkContinueResponseParameters;
}

export interface NetworkContinueResponseParameters {
  request: NetworkRequest;
  cookies?: NetworkSetCookieHeader[];
  credentials?: NetworkAuthCredentials;
  headers?: NetworkHeader[];
  reasonPhrase?: string;
  statusCode?: JsUint;
}

export interface NetworkContinueWithAuth extends Command {
  method: 'network.continueWithAuth';
  params: NetworkContinueWithAuthParameters;
}

export interface NetworkContinueWithAuthParameters extends NetworkContinueWithAuthCredentials {
  request: NetworkRequest;
}

export interface NetworkContinueWithAuthCredentials {
  action: 'provideCredentials';
  credentials: NetworkAuthCredentials;
}

export interface NetworkContinueWithAuthNoCredentials {
  action: 'default' | 'cancel';
}

export interface NetworkFailRequest extends Command {
  method: 'network.failRequest';
  params: NetworkFailRequestParameters;
}

export interface NetworkFailRequestParameters {
  request: NetworkRequest;
}

export interface NetworkProvideResponse extends Command {
  method: 'network.provideResponse';
  params: NetworkProvideResponseParameters;
}

export interface NetworkProvideResponseParameters {
  request: NetworkRequest;
  body?: NetworkBytesValue;
  cookies?: NetworkSetCookieHeader[];
  headers?: NetworkHeader[];
  reasonPhrase?: string;
  statusCode?: JsUint;
}

export interface NetworkRemoveIntercept extends Command {
  method: 'network.removeIntercept';
  params: NetworkRemoveInterceptParameters;
}

export interface NetworkRemoveInterceptParameters {
  intercept: NetworkIntercept;
}

export type ScriptCommand = ScriptAddPreloadScript | ScriptCallFunction | ScriptDisown | ScriptEvaluate | ScriptGetRealms | ScriptRemovePreloadScript;
export type ScriptChannel = string;

export interface ScriptChannelValue {
  type: 'channel';
  value: ScriptChannelProperties;
}

export interface ScriptChannelProperties {
  channel: ScriptChannel;
  serializationOptions?: ScriptSerializationOptions;
  ownership?: ScriptResultOwnership;
}

export type ScriptEvaluateResult = ScriptEvaluateResultSuccess | ScriptEvaluateResultException;

export interface ScriptEvaluateResultSuccess {
  type: 'success';
  result: ScriptRemoteValue;
  realm: ScriptRealm;
}

export interface ScriptEvaluateResultException {
  type: 'exception';
  exceptionDetails: ScriptExceptionDetails;
  realm: ScriptRealm;
}

export interface ScriptExceptionDetails {
  columnNumber: JsUint;
  exception: ScriptRemoteValue;
  lineNumber: JsUint;
  stackTrace: ScriptStackTrace;
  text: string;
}

export type ScriptHandle = string;
export type ScriptInternalId = string;
export type ScriptLocalValue = ScriptRemoteReference | ScriptPrimitiveProtocolValue | ScriptChannelValue | ScriptArrayLocalValue | ScriptDateLocalValue | ScriptMapLocalValue | ScriptObjectLocalValue | ScriptRegExpLocalValue | ScriptSetLocalValue;
export type ScriptListLocalValue = (ScriptLocalValue)[];

export interface ScriptArrayLocalValue {
  type: 'array';
  value: ScriptListLocalValue;
}

export interface ScriptDateLocalValue {
  type: 'date';
  value: string;
}

export type ScriptMappingLocalValue = (ScriptLocalValue | ScriptLocalValue)[];

export interface ScriptMapLocalValue {
  type: 'map';
  value: ScriptMappingLocalValue;
}

export interface ScriptObjectLocalValue {
  type: 'object';
  value: ScriptMappingLocalValue;
}

export interface ScriptRegExpValue {
  pattern: string;
  flags?: string;
}

export interface ScriptRegExpLocalValue {
  type: 'regexp';
  value: ScriptRegExpValue;
}

export interface ScriptSetLocalValue {
  type: 'set';
  value: ScriptListLocalValue;
}

export type ScriptPreloadScript = string;
export type ScriptRealm = string;
export type ScriptPrimitiveProtocolValue = ScriptUndefinedValue | ScriptNullValue | ScriptStringValue | ScriptNumberValue | ScriptBooleanValue | ScriptBigIntValue;

export interface ScriptUndefinedValue {
  type: 'undefined';
}

export interface ScriptNullValue {
  type: null;
}

export interface ScriptStringValue {
  type: 'string';
  value: string;
}

export type ScriptSpecialNumber = 'NaN' | '-0' | 'Infinity' | '-Infinity';

export interface ScriptNumberValue {
  type: 'number';
  value: Number | ScriptSpecialNumber;
}

export interface ScriptBooleanValue {
  type: 'boolean';
  value: boolean;
}

export interface ScriptBigIntValue {
  type: 'bigint';
  value: string;
}

export type ScriptRealmType = 'window' | 'dedicated-worker' | 'shared-worker' | 'service-worker' | 'worker' | 'paint-worklet' | 'audio-worklet' | 'worklet';
export type ScriptRemoteReference = ScriptSharedReference | ScriptRemoteObjectReference;

export interface ScriptSharedReference extends Extensible {
  sharedId: ScriptSharedId;
  handle?: ScriptHandle;
}

export interface ScriptRemoteObjectReference extends Extensible {
  handle: ScriptHandle;
  sharedId?: ScriptSharedId;
}

export type ScriptRemoteValue = ScriptPrimitiveProtocolValue | ScriptSymbolRemoteValue | ScriptArrayRemoteValue | ScriptObjectRemoteValue | ScriptFunctionRemoteValue | ScriptRegExpRemoteValue | ScriptDateRemoteValue | ScriptMapRemoteValue | ScriptSetRemoteValue | ScriptWeakMapRemoteValue | ScriptWeakSetRemoteValue | ScriptIteratorRemoteValue | ScriptGeneratorRemoteValue | ScriptErrorRemoteValue | ScriptProxyRemoteValue | ScriptPromiseRemoteValue | ScriptTypedArrayRemoteValue | ScriptArrayBufferRemoteValue | ScriptNodeListRemoteValue | ScriptHtmlCollectionRemoteValue | ScriptNodeRemoteValue | ScriptWindowProxyRemoteValue;
export type ScriptListRemoteValue = (ScriptRemoteValue)[];
export type ScriptMappingRemoteValue = (ScriptRemoteValue | ScriptRemoteValue)[];

export interface ScriptSymbolRemoteValue {
  type: 'symbol';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptArrayRemoteValue {
  type: 'array';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptObjectRemoteValue {
  type: 'object';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptMappingRemoteValue;
}

export interface ScriptFunctionRemoteValue {
  type: 'function';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptRegExpRemoteValue extends ScriptRegExpLocalValue {
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptDateRemoteValue extends ScriptDateLocalValue {
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptMapRemoteValue {
  type: 'map';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptMappingRemoteValue;
}

export interface ScriptSetRemoteValue {
  type: 'set';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptWeakMapRemoteValue {
  type: 'weakmap';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptWeakSetRemoteValue {
  type: 'weakset';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptIteratorRemoteValue {
  type: 'iterator';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptGeneratorRemoteValue {
  type: 'generator';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptErrorRemoteValue {
  type: 'error';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptProxyRemoteValue {
  type: 'proxy';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptPromiseRemoteValue {
  type: 'promise';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptTypedArrayRemoteValue {
  type: 'typedarray';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptArrayBufferRemoteValue {
  type: 'arraybuffer';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptNodeListRemoteValue {
  type: 'nodelist';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptHtmlCollectionRemoteValue {
  type: 'htmlcollection';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptNodeRemoteValue {
  type: 'node';
  sharedId?: ScriptSharedId;
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptNodeProperties;
}

export interface ScriptNodeProperties {
  nodeType: JsUint;
  childNodeCount: JsUint;
  attributes?: Record<string, string>;
  children?: ScriptNodeRemoteValue[];
  localName?: string;
  mode?: 'open' | 'closed';
  namespaceUri?: string;
  nodeValue?: string;
  shadowRoot?: ScriptNodeRemoteValue | null;
}

export interface ScriptWindowProxyRemoteValue {
  type: 'window';
  value: ScriptWindowProxyProperties;
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptWindowProxyProperties {
  context: BrowsingContextBrowsingContext;
}

export type ScriptResultOwnership = 'root' | 'none';

export interface ScriptSerializationOptions {
  maxDomDepth?: JsUint | null;
  /**
   * @default null
   */
  maxObjectDepth?: JsUint | null;
  /**
   * @default 'none'
   */
  includeShadowTree?: 'none' | 'open' | 'all';
}

export type ScriptSharedId = string;

export interface ScriptStackFrame {
  columnNumber: JsUint;
  functionName: string;
  lineNumber: JsUint;
  url: string;
}

export interface ScriptStackTrace {
  callFrames: ScriptStackFrame[];
}

export interface ScriptRealmTarget {
  realm: ScriptRealm;
}

export interface ScriptContextTarget {
  context: BrowsingContextBrowsingContext;
  sandbox?: string;
}

export type ScriptTarget = ScriptRealmTarget | ScriptContextTarget;

export interface ScriptAddPreloadScript extends Command {
  method: 'script.addPreloadScript';
  params: ScriptAddPreloadScriptParameters;
}

export interface ScriptAddPreloadScriptParameters {
  functionDeclaration: string;
  arguments?: ScriptChannelValue[];
  contexts?: BrowsingContextBrowsingContext[];
  sandbox?: string;
}

export interface ScriptDisown extends Command {
  method: 'script.disown';
  params: ScriptDisownParameters;
}

export interface ScriptDisownParameters {
  handles: ScriptHandle[];
  target: ScriptTarget;
}

export interface ScriptCallFunction extends Command {
  method: 'script.callFunction';
  params: ScriptCallFunctionParameters;
}

export interface ScriptCallFunctionParameters {
  functionDeclaration: string;
  awaitPromise: boolean;
  target: ScriptTarget;
  arguments?: ScriptLocalValue[];
  resultOwnership?: ScriptResultOwnership;
  serializationOptions?: ScriptSerializationOptions;
  this?: ScriptLocalValue;
  userActivation?: boolean;
}

export interface ScriptEvaluate extends Command {
  method: 'script.evaluate';
  params: ScriptEvaluateParameters;
}

export interface ScriptEvaluateParameters {
  expression: string;
  target: ScriptTarget;
  awaitPromise: boolean;
  resultOwnership?: ScriptResultOwnership;
  serializationOptions?: ScriptSerializationOptions;
  userActivation?: boolean;
}

export interface ScriptGetRealms extends Command {
  method: 'script.getRealms';
  params: ScriptGetRealmsParameters;
}

export interface ScriptGetRealmsParameters {
  context?: BrowsingContextBrowsingContext;
  type?: ScriptRealmType;
}

export interface ScriptRemovePreloadScript extends Command {
  method: 'script.removePreloadScript';
  params: ScriptRemovePreloadScriptParameters;
}

export interface ScriptRemovePreloadScriptParameters {
  script: ScriptPreloadScript;
}

export type InputCommand = InputPerformActions | InputReleaseActions;

export interface InputElementOrigin {
  type: 'element';
  element: ScriptSharedReference;
}

export interface InputPerformActions extends Command {
  method: 'input.performActions';
  params: InputPerformActionsParameters;
}

export interface InputPerformActionsParameters {
  context: BrowsingContextBrowsingContext;
  actions: InputSourceActions[];
}

export type InputSourceActions = InputNoneSourceActions | InputKeySourceActions | InputPointerSourceActions | InputWheelSourceActions;

export interface InputNoneSourceActions {
  type: 'none';
  id: string;
  actions: InputNoneSourceAction[];
}

export type InputNoneSourceAction = InputPauseAction;

export interface InputKeySourceActions {
  type: 'key';
  id: string;
  actions: InputKeySourceAction[];
}

export type InputKeySourceAction = InputPauseAction | InputKeyDownAction | InputKeyUpAction;

export interface InputPointerSourceActions {
  type: 'pointer';
  id: string;
  parameters?: InputPointerParameters;
  actions: InputPointerSourceAction[];
}

export type InputPointerType = 'mouse' | 'pen' | 'touch';

export interface InputPointerParameters {
  /**
   * @default 'mouse'
   */
  pointerType?: InputPointerType;
}

export type InputPointerSourceAction = InputPauseAction | InputPointerDownAction | InputPointerUpAction | InputPointerMoveAction;

export interface InputWheelSourceActions {
  type: 'wheel';
  id: string;
  actions: InputWheelSourceAction[];
}

export type InputWheelSourceAction = InputPauseAction | InputWheelScrollAction;

export interface InputPauseAction {
  type: 'pause';
  duration?: JsUint;
}

export interface InputKeyDownAction {
  type: 'keyDown';
  value: string;
}

export interface InputKeyUpAction {
  type: 'keyUp';
  value: string;
}

export interface InputPointerUpAction extends InputPointerCommonProperties {
  type: 'pointerUp';
  button: JsUint;
}

export interface InputPointerDownAction extends InputPointerCommonProperties {
  type: 'pointerDown';
  button: JsUint;
}

export interface InputPointerMoveAction extends InputPointerCommonProperties {
  type: 'pointerMove';
  x: JsInt;
  y: JsInt;
  duration?: JsUint;
  origin?: InputOrigin;
}

export interface InputWheelScrollAction {
  type: 'scroll';
  x: JsInt;
  y: JsInt;
  deltaX: JsInt;
  deltaY: JsInt;
  duration?: JsUint;
  /**
   * @default 'viewport'
   */
  origin?: InputOrigin;
}

export interface InputPointerCommonProperties {
  /**
   * @default 1
   */
  width?: JsUint;
  /**
   * @default 1
   */
  height?: JsUint;
  pressure?: number;
  tangentialPressure?: number;
  /**
   * 0 .. Math.PI / 2
   */
  twist?: number;
  /**
   * 0 .. 2 * Math.PI
   */
  altitudeAngle?: number;
  azimuthAngle?: number;
}

export type InputOrigin = 'viewport' | 'pointer' | InputElementOrigin;

export interface InputReleaseActions extends Command {
  method: 'input.releaseActions';
  params: InputReleaseActionsParameters;
}

export interface InputReleaseActionsParameters {
  context: BrowsingContextBrowsingContext;
}