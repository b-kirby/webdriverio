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

export default {
    "sendCommand": {
        "socket": {
            "command": "send",
            "description": "Send socket commands via WebDriver Bidi",
            "ref": "https://github.com/w3c/webdriver-bidi",
            "parameters": [
                {
                    "name": "params",
                    "type": "CommandData",
                    "description": "socket payload",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "CommandResponse",
                "description": "WebDriver Bidi response"
            }
        }
    },
    "sendAsyncCommand": {
        "socket": {
            "command": "sendAsync",
            "description": "Send asynchronous socket commands via WebDriver Bidi",
            "ref": "https://github.com/w3c/webdriver-bidi",
            "parameters": [
                {
                    "name": "params",
                    "type": "CommandData",
                    "description": "socket payload",
                    "required": true
                }
            ],
            "returns": {
                "type": "Number",
                "name": "id",
                "description": "id of WebDriver Bidi request"
            }
        }
    },
    "session.status": {
        "socket": {
            "command": "sessionStatus",
            "description": "WebDriver Bidi command to send command method \"session.status\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-session-status",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.EmptyParams`",
                    "description": "<pre>\\{\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.SessionStatusResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     ready: boolean;\n     message: string;\n   }\n   ```"
            }
        }
    },
    "session.new": {
        "socket": {
            "command": "sessionNew",
            "description": "WebDriver Bidi command to send command method \"session.new\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-session-new",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.SessionNewParameters`",
                    "description": "<pre>\\{<br />  capabilities: SessionCapabilitiesRequest;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.SessionNewResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     sessionId: string;\n     capabilities: {\n       acceptInsecureCerts: boolean;\n       browserName: string;\n       browserVersion: string;\n       platformName: string;\n       proxy: {\n         proxyType?: \"pac\" | \"direct\" | \"autodetect\" | \"system\" | \"manual\";\n         proxyAutoconfigUrl?: string;\n         ftpProxy?: string;\n         httpProxy?: string;\n         noProxy?: string[];\n         sslProxy?: string;\n         socksProxy?: string;\n         socksVersion?: number;\n       };\n       setWindowRect: boolean;\n     };\n   }\n   ```"
            }
        }
    },
    "session.end": {
        "socket": {
            "command": "sessionEnd",
            "description": "WebDriver Bidi command to send command method \"session.end\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-session-end",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.EmptyParams`",
                    "description": "<pre>\\{\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "session.subscribe": {
        "socket": {
            "command": "sessionSubscribe",
            "description": "WebDriver Bidi command to send command method \"session.subscribe\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-session-subscribe",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.SessionSubscriptionRequest`",
                    "description": "<pre>\\{<br />  events: string[];<br />  contexts?: BrowsingContextBrowsingContext[];<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "session.unsubscribe": {
        "socket": {
            "command": "sessionUnsubscribe",
            "description": "WebDriver Bidi command to send command method \"session.unsubscribe\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.SessionSubscriptionRequest`",
                    "description": "<pre>\\{<br />  events: string[];<br />  contexts?: BrowsingContextBrowsingContext[];<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browser.close": {
        "socket": {
            "command": "browserClose",
            "description": "WebDriver Bidi command to send command method \"browser.close\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browser-close",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.EmptyParams`",
                    "description": "<pre>\\{\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browsingContext.activate": {
        "socket": {
            "command": "browsingContextActivate",
            "description": "WebDriver Bidi command to send command method \"browsingContext.activate\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextActivateParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browsingContext.captureScreenshot": {
        "socket": {
            "command": "browsingContextCaptureScreenshot",
            "description": "WebDriver Bidi command to send command method \"browsingContext.captureScreenshot\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextCaptureScreenshotParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  /\\*\\*<br />   \\* @default 'viewport'<br />   \\*/<br />  origin?: \"viewport\" &#124; \"document\";<br />  format?: BrowsingContextImageFormat;<br />  clip?: BrowsingContextClipRectangle;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.BrowsingContextCaptureScreenshotResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     data: string;\n   }\n   ```"
            }
        }
    },
    "browsingContext.close": {
        "socket": {
            "command": "browsingContextClose",
            "description": "WebDriver Bidi command to send command method \"browsingContext.close\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-close",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextCloseParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  promptUnload?: boolean;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browsingContext.create": {
        "socket": {
            "command": "browsingContextCreate",
            "description": "WebDriver Bidi command to send command method \"browsingContext.create\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-create",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextCreateParameters`",
                    "description": "<pre>\\{<br />  type: BrowsingContextCreateType;<br />  referenceContext?: BrowsingContextBrowsingContext;<br />  background?: boolean;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.BrowsingContextCreateResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     context: BrowsingContextBrowsingContext;\n   }\n   ```"
            }
        }
    },
    "browsingContext.getTree": {
        "socket": {
            "command": "browsingContextGetTree",
            "description": "WebDriver Bidi command to send command method \"browsingContext.getTree\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextGetTreeParameters`",
                    "description": "<pre>\\{<br />  maxDepth?: JsUint;<br />  root?: BrowsingContextBrowsingContext;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.BrowsingContextGetTreeResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     contexts: BrowsingContextInfoList;\n   }\n   ```"
            }
        }
    },
    "browsingContext.handleUserPrompt": {
        "socket": {
            "command": "browsingContextHandleUserPrompt",
            "description": "WebDriver Bidi command to send command method \"browsingContext.handleUserPrompt\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextHandleUserPromptParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  accept?: boolean;<br />  userText?: string;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browsingContext.locateNodes": {
        "socket": {
            "command": "browsingContextLocateNodes",
            "description": "WebDriver Bidi command to send command method \"browsingContext.locateNodes\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-locateNodes",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextLocateNodesParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  locator: BrowsingContextLocator;<br />  maxNodeCount?: JsUint;<br />  ownership?: ScriptResultOwnership;<br />  sandbox?: string;<br />  serializationOptions?: ScriptSerializationOptions;<br />  startNodes?: ScriptSharedReference[];<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.BrowsingContextLocateNodesResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     nodes: ScriptNodeRemoteValue[];\n   }\n   ```"
            }
        }
    },
    "browsingContext.navigate": {
        "socket": {
            "command": "browsingContextNavigate",
            "description": "WebDriver Bidi command to send command method \"browsingContext.navigate\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextNavigateParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  url: string;<br />  wait?: BrowsingContextReadinessState;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.BrowsingContextNavigateResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     navigation: BrowsingContextNavigation | null;\n     url: string;\n   }\n   ```"
            }
        }
    },
    "browsingContext.print": {
        "socket": {
            "command": "browsingContextPrint",
            "description": "WebDriver Bidi command to send command method \"browsingContext.print\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-print",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextPrintParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  background?: boolean;<br />  margin?: BrowsingContextPrintMarginParameters;<br />  /\\*\\*<br />   \\* @default 'portrait'<br />   \\*/<br />  orientation?: \"portrait\" &#124; \"landscape\";<br />  page?: BrowsingContextPrintPageParameters;<br />  pageRanges?: (JsUint &#124; string)[];<br />  /\\*\\*<br />   \\* @default 1<br />   \\*/<br />  scale?: number;<br />  /\\*\\*<br />   \\* @default true<br />   \\*/<br />  shrinkToFit?: boolean;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.BrowsingContextPrintResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     data: string;\n   }\n   ```"
            }
        }
    },
    "browsingContext.reload": {
        "socket": {
            "command": "browsingContextReload",
            "description": "WebDriver Bidi command to send command method \"browsingContext.reload\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextReloadParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  ignoreCache?: boolean;<br />  wait?: BrowsingContextReadinessState;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browsingContext.setViewport": {
        "socket": {
            "command": "browsingContextSetViewport",
            "description": "WebDriver Bidi command to send command method \"browsingContext.setViewport\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextSetViewportParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  viewport?: BrowsingContextViewport &#124; null;<br />  devicePixelRatio?: number &#124; null;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "browsingContext.traverseHistory": {
        "socket": {
            "command": "browsingContextTraverseHistory",
            "description": "WebDriver Bidi command to send command method \"browsingContext.traverseHistory\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.BrowsingContextTraverseHistoryParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  delta: JsInt;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "network.addIntercept": {
        "socket": {
            "command": "networkAddIntercept",
            "description": "WebDriver Bidi command to send command method \"network.addIntercept\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-addIntercept",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkAddInterceptParameters`",
                    "description": "<pre>\\{<br />  phases: NetworkInterceptPhase[];<br />  urlPatterns?: NetworkUrlPattern[];<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.NetworkAddInterceptResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     intercept: NetworkIntercept;\n   }\n   ```"
            }
        }
    },
    "network.continueRequest": {
        "socket": {
            "command": "networkContinueRequest",
            "description": "WebDriver Bidi command to send command method \"network.continueRequest\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-continueRequest",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkContinueRequestParameters`",
                    "description": "<pre>\\{<br />  request: NetworkRequest;<br />  body?: NetworkBytesValue;<br />  cookies?: NetworkCookieHeader[];<br />  headers?: NetworkHeader[];<br />  method?: string;<br />  url?: string;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "network.continueResponse": {
        "socket": {
            "command": "networkContinueResponse",
            "description": "WebDriver Bidi command to send command method \"network.continueResponse\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-continueResponse",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkContinueResponseParameters`",
                    "description": "<pre>\\{<br />  request: NetworkRequest;<br />  cookies?: NetworkSetCookieHeader[];<br />  credentials?: NetworkAuthCredentials;<br />  headers?: NetworkHeader[];<br />  reasonPhrase?: string;<br />  statusCode?: JsUint;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "network.continueWithAuth": {
        "socket": {
            "command": "networkContinueWithAuth",
            "description": "WebDriver Bidi command to send command method \"network.continueWithAuth\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkContinueWithAuthParameters`",
                    "description": "<pre>\\{<br />  request: NetworkRequest;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "network.failRequest": {
        "socket": {
            "command": "networkFailRequest",
            "description": "WebDriver Bidi command to send command method \"network.failRequest\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-failRequest",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkFailRequestParameters`",
                    "description": "<pre>\\{<br />  request: NetworkRequest;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "network.provideResponse": {
        "socket": {
            "command": "networkProvideResponse",
            "description": "WebDriver Bidi command to send command method \"network.provideResponse\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-provideResponse",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkProvideResponseParameters`",
                    "description": "<pre>\\{<br />  request: NetworkRequest;<br />  body?: NetworkBytesValue;<br />  cookies?: NetworkSetCookieHeader[];<br />  headers?: NetworkHeader[];<br />  reasonPhrase?: string;<br />  statusCode?: JsUint;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "network.removeIntercept": {
        "socket": {
            "command": "networkRemoveIntercept",
            "description": "WebDriver Bidi command to send command method \"network.removeIntercept\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.NetworkRemoveInterceptParameters`",
                    "description": "<pre>\\{<br />  intercept: NetworkIntercept;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "script.addPreloadScript": {
        "socket": {
            "command": "scriptAddPreloadScript",
            "description": "WebDriver Bidi command to send command method \"script.addPreloadScript\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.ScriptAddPreloadScriptParameters`",
                    "description": "<pre>\\{<br />  functionDeclaration: string;<br />  arguments?: ScriptChannelValue[];<br />  contexts?: BrowsingContextBrowsingContext[];<br />  sandbox?: string;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.ScriptAddPreloadScriptResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     script: ScriptPreloadScript;\n   }\n   ```"
            }
        }
    },
    "script.disown": {
        "socket": {
            "command": "scriptDisown",
            "description": "WebDriver Bidi command to send command method \"script.disown\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-script-disown",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.ScriptDisownParameters`",
                    "description": "<pre>\\{<br />  handles: ScriptHandle[];<br />  target: ScriptTarget;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "script.callFunction": {
        "socket": {
            "command": "scriptCallFunction",
            "description": "WebDriver Bidi command to send command method \"script.callFunction\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-script-callFunction",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.ScriptCallFunctionParameters`",
                    "description": "<pre>\\{<br />  functionDeclaration: string;<br />  awaitPromise: boolean;<br />  target: ScriptTarget;<br />  arguments?: ScriptLocalValue[];<br />  resultOwnership?: ScriptResultOwnership;<br />  serializationOptions?: ScriptSerializationOptions;<br />  this?: ScriptLocalValue;<br />  userActivation?: boolean;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "script.evaluate": {
        "socket": {
            "command": "scriptEvaluate",
            "description": "WebDriver Bidi command to send command method \"script.evaluate\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-script-evaluate",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.ScriptEvaluateParameters`",
                    "description": "<pre>\\{<br />  expression: string;<br />  target: ScriptTarget;<br />  awaitPromise: boolean;<br />  resultOwnership?: ScriptResultOwnership;<br />  serializationOptions?: ScriptSerializationOptions;<br />  userActivation?: boolean;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.ScriptEvaluateResult",
                "description": "Command return value with the following interface:\n   ```ts\n   ;\n   ```"
            }
        }
    },
    "script.getRealms": {
        "socket": {
            "command": "scriptGetRealms",
            "description": "WebDriver Bidi command to send command method \"script.getRealms\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-script-getRealms",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.ScriptGetRealmsParameters`",
                    "description": "<pre>\\{<br />  context?: BrowsingContextBrowsingContext;<br />  type?: ScriptRealmType;<br />\\}</pre>",
                    "required": true
                }
            ],
            "returns": {
                "type": "Object",
                "name": "local.ScriptGetRealmsResult",
                "description": "Command return value with the following interface:\n   ```ts\n   {\n     realms: ScriptRealmInfo[];\n   }\n   ```"
            }
        }
    },
    "script.removePreloadScript": {
        "socket": {
            "command": "scriptRemovePreloadScript",
            "description": "WebDriver Bidi command to send command method \"script.removePreloadScript\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-script-removePreloadScript",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.ScriptRemovePreloadScriptParameters`",
                    "description": "<pre>\\{<br />  script: ScriptPreloadScript;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "input.performActions": {
        "socket": {
            "command": "inputPerformActions",
            "description": "WebDriver Bidi command to send command method \"input.performActions\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-input-performActions",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.InputPerformActionsParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />  actions: InputSourceActions[];<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    },
    "input.releaseActions": {
        "socket": {
            "command": "inputReleaseActions",
            "description": "WebDriver Bidi command to send command method \"input.releaseActions\" with parameters.",
            "ref": "https://w3c.github.io/webdriver-bidi/#command-input-releaseActions",
            "parameters": [
                {
                    "name": "params",
                    "type": "`remote.InputReleaseActionsParameters`",
                    "description": "<pre>\\{<br />  context: BrowsingContextBrowsingContext;<br />\\}</pre>",
                    "required": true
                }
            ]
        }
    }
}