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

import type * as local from './localTypes.js'
import type * as remote from './remoteTypes.js'
import { BidiCore } from './core.js'

export class BidiHandler extends BidiCore {
    /**
     * WebDriver Bidi command to send command method "session.status" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-session-status
     * @param params `remote.EmptyParams` {@link https://w3c.github.io/webdriver-bidi/#command-session-status | command parameter}
     * @returns `Promise<local.SessionStatusResult>`
     **/
    async sessionStatus(params: remote.EmptyParams): Promise<local.SessionStatusResult> {
        const result = await this.send({
            method: 'session.status',
            params
        })

        return result.result as local.SessionStatusResult
    }

    /**
     * WebDriver Bidi command to send command method "session.new" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-session-new
     * @param params `remote.SessionNewParameters` {@link https://w3c.github.io/webdriver-bidi/#command-session-new | command parameter}
     * @returns `Promise<local.SessionNewResult>`
     **/
    async sessionNew(params: remote.SessionNewParameters): Promise<local.SessionNewResult> {
        const result = await this.send({
            method: 'session.new',
            params
        })

        return result.result as local.SessionNewResult
    }

    /**
     * WebDriver Bidi command to send command method "session.end" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-session-end
     * @param params `remote.EmptyParams` {@link https://w3c.github.io/webdriver-bidi/#command-session-end | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async sessionEnd(params: remote.EmptyParams): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'session.end',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "session.subscribe" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-session-subscribe
     * @param params `remote.SessionSubscriptionRequest` {@link https://w3c.github.io/webdriver-bidi/#command-session-subscribe | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async sessionSubscribe(params: remote.SessionSubscriptionRequest): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'session.subscribe',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "session.unsubscribe" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe
     * @param params `remote.SessionSubscriptionRequest` {@link https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async sessionUnsubscribe(params: remote.SessionSubscriptionRequest): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'session.unsubscribe',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browser.close" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browser-close
     * @param params `remote.EmptyParams` {@link https://w3c.github.io/webdriver-bidi/#command-browser-close | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async browserClose(params: remote.EmptyParams): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'browser.close',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.activate" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate
     * @param params `remote.BrowsingContextActivateParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async browsingContextActivate(params: remote.BrowsingContextActivateParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'browsingContext.activate',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.captureScreenshot" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot
     * @param params `remote.BrowsingContextCaptureScreenshotParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot | command parameter}
     * @returns `Promise<local.BrowsingContextCaptureScreenshotResult>`
     **/
    async browsingContextCaptureScreenshot(params: remote.BrowsingContextCaptureScreenshotParameters): Promise<local.BrowsingContextCaptureScreenshotResult> {
        const result = await this.send({
            method: 'browsingContext.captureScreenshot',
            params
        })

        return result.result as local.BrowsingContextCaptureScreenshotResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.close" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-close
     * @param params `remote.BrowsingContextCloseParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-close | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async browsingContextClose(params: remote.BrowsingContextCloseParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'browsingContext.close',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.create" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-create
     * @param params `remote.BrowsingContextCreateParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-create | command parameter}
     * @returns `Promise<local.BrowsingContextCreateResult>`
     **/
    async browsingContextCreate(params: remote.BrowsingContextCreateParameters): Promise<local.BrowsingContextCreateResult> {
        const result = await this.send({
            method: 'browsingContext.create',
            params
        })

        return result.result as local.BrowsingContextCreateResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.getTree" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree
     * @param params `remote.BrowsingContextGetTreeParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree | command parameter}
     * @returns `Promise<local.BrowsingContextGetTreeResult>`
     **/
    async browsingContextGetTree(params: remote.BrowsingContextGetTreeParameters): Promise<local.BrowsingContextGetTreeResult> {
        const result = await this.send({
            method: 'browsingContext.getTree',
            params
        })

        return result.result as local.BrowsingContextGetTreeResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.handleUserPrompt" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt
     * @param params `remote.BrowsingContextHandleUserPromptParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async browsingContextHandleUserPrompt(params: remote.BrowsingContextHandleUserPromptParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'browsingContext.handleUserPrompt',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.locateNodes" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-locateNodes
     * @param params `remote.BrowsingContextLocateNodesParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-locateNodes | command parameter}
     * @returns `Promise<local.BrowsingContextLocateNodesResult>`
     **/
    async browsingContextLocateNodes(params: remote.BrowsingContextLocateNodesParameters): Promise<local.BrowsingContextLocateNodesResult> {
        const result = await this.send({
            method: 'browsingContext.locateNodes',
            params
        })

        return result.result as local.BrowsingContextLocateNodesResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.navigate" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate
     * @param params `remote.BrowsingContextNavigateParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate | command parameter}
     * @returns `Promise<local.BrowsingContextNavigateResult>`
     **/
    async browsingContextNavigate(params: remote.BrowsingContextNavigateParameters): Promise<local.BrowsingContextNavigateResult> {
        const result = await this.send({
            method: 'browsingContext.navigate',
            params
        })

        return result.result as local.BrowsingContextNavigateResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.print" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-print
     * @param params `remote.BrowsingContextPrintParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-print | command parameter}
     * @returns `Promise<local.BrowsingContextPrintResult>`
     **/
    async browsingContextPrint(params: remote.BrowsingContextPrintParameters): Promise<local.BrowsingContextPrintResult> {
        const result = await this.send({
            method: 'browsingContext.print',
            params
        })

        return result.result as local.BrowsingContextPrintResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.reload" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload
     * @param params `remote.BrowsingContextReloadParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async browsingContextReload(params: remote.BrowsingContextReloadParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'browsingContext.reload',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.setViewport" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport
     * @param params `remote.BrowsingContextSetViewportParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async browsingContextSetViewport(params: remote.BrowsingContextSetViewportParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'browsingContext.setViewport',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "browsingContext.traverseHistory" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory
     * @param params `remote.BrowsingContextTraverseHistoryParameters` {@link https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory | command parameter}
     * @returns `Promise<local.BrowsingContextTraverseHistoryResult>`
     **/
    async browsingContextTraverseHistory(params: remote.BrowsingContextTraverseHistoryParameters): Promise<local.BrowsingContextTraverseHistoryResult> {
        const result = await this.send({
            method: 'browsingContext.traverseHistory',
            params
        })

        return result.result as local.BrowsingContextTraverseHistoryResult
    }

    /**
     * WebDriver Bidi command to send command method "network.addIntercept" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-addIntercept
     * @param params `remote.NetworkAddInterceptParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-addIntercept | command parameter}
     * @returns `Promise<local.NetworkAddInterceptResult>`
     **/
    async networkAddIntercept(params: remote.NetworkAddInterceptParameters): Promise<local.NetworkAddInterceptResult> {
        const result = await this.send({
            method: 'network.addIntercept',
            params
        })

        return result.result as local.NetworkAddInterceptResult
    }

    /**
     * WebDriver Bidi command to send command method "network.continueRequest" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-continueRequest
     * @param params `remote.NetworkContinueRequestParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-continueRequest | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async networkContinueRequest(params: remote.NetworkContinueRequestParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'network.continueRequest',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "network.continueResponse" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-continueResponse
     * @param params `remote.NetworkContinueResponseParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-continueResponse | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async networkContinueResponse(params: remote.NetworkContinueResponseParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'network.continueResponse',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "network.continueWithAuth" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth
     * @param params `remote.NetworkContinueWithAuthParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-continueWithAuth | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async networkContinueWithAuth(params: remote.NetworkContinueWithAuthParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'network.continueWithAuth',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "network.failRequest" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-failRequest
     * @param params `remote.NetworkFailRequestParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-failRequest | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async networkFailRequest(params: remote.NetworkFailRequestParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'network.failRequest',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "network.provideResponse" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-provideResponse
     * @param params `remote.NetworkProvideResponseParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-provideResponse | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async networkProvideResponse(params: remote.NetworkProvideResponseParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'network.provideResponse',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "network.removeIntercept" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept
     * @param params `remote.NetworkRemoveInterceptParameters` {@link https://w3c.github.io/webdriver-bidi/#command-network-removeIntercept | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async networkRemoveIntercept(params: remote.NetworkRemoveInterceptParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'network.removeIntercept',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "script.addPreloadScript" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript
     * @param params `remote.ScriptAddPreloadScriptParameters` {@link https://w3c.github.io/webdriver-bidi/#command-script-addPreloadScript | command parameter}
     * @returns `Promise<local.ScriptAddPreloadScriptResult>`
     **/
    async scriptAddPreloadScript(params: remote.ScriptAddPreloadScriptParameters): Promise<local.ScriptAddPreloadScriptResult> {
        const result = await this.send({
            method: 'script.addPreloadScript',
            params
        })

        return result.result as local.ScriptAddPreloadScriptResult
    }

    /**
     * WebDriver Bidi command to send command method "script.disown" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-script-disown
     * @param params `remote.ScriptDisownParameters` {@link https://w3c.github.io/webdriver-bidi/#command-script-disown | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async scriptDisown(params: remote.ScriptDisownParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'script.disown',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "script.callFunction" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-script-callFunction
     * @param params `remote.ScriptCallFunctionParameters` {@link https://w3c.github.io/webdriver-bidi/#command-script-callFunction | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async scriptCallFunction(params: remote.ScriptCallFunctionParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'script.callFunction',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "script.evaluate" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-script-evaluate
     * @param params `remote.ScriptEvaluateParameters` {@link https://w3c.github.io/webdriver-bidi/#command-script-evaluate | command parameter}
     * @returns `Promise<local.ScriptEvaluateResult>`
     **/
    async scriptEvaluate(params: remote.ScriptEvaluateParameters): Promise<local.ScriptEvaluateResult> {
        const result = await this.send({
            method: 'script.evaluate',
            params
        })

        return result.result as local.ScriptEvaluateResult
    }

    /**
     * WebDriver Bidi command to send command method "script.getRealms" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-script-getRealms
     * @param params `remote.ScriptGetRealmsParameters` {@link https://w3c.github.io/webdriver-bidi/#command-script-getRealms | command parameter}
     * @returns `Promise<local.ScriptGetRealmsResult>`
     **/
    async scriptGetRealms(params: remote.ScriptGetRealmsParameters): Promise<local.ScriptGetRealmsResult> {
        const result = await this.send({
            method: 'script.getRealms',
            params
        })

        return result.result as local.ScriptGetRealmsResult
    }

    /**
     * WebDriver Bidi command to send command method "script.removePreloadScript" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-script-removePreloadScript
     * @param params `remote.ScriptRemovePreloadScriptParameters` {@link https://w3c.github.io/webdriver-bidi/#command-script-removePreloadScript | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async scriptRemovePreloadScript(params: remote.ScriptRemovePreloadScriptParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'script.removePreloadScript',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "input.performActions" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-input-performActions
     * @param params `remote.InputPerformActionsParameters` {@link https://w3c.github.io/webdriver-bidi/#command-input-performActions | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async inputPerformActions(params: remote.InputPerformActionsParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'input.performActions',
            params
        })

        return result.result as local.EmptyResult
    }

    /**
     * WebDriver Bidi command to send command method "input.releaseActions" with parameters.
     * @url https://w3c.github.io/webdriver-bidi/#command-input-releaseActions
     * @param params `remote.InputReleaseActionsParameters` {@link https://w3c.github.io/webdriver-bidi/#command-input-releaseActions | command parameter}
     * @returns `Promise<local.EmptyResult>`
     **/
    async inputReleaseActions(params: remote.InputReleaseActionsParameters): Promise<local.EmptyResult> {
        const result = await this.send({
            method: 'input.releaseActions',
            params
        })

        return result.result as local.EmptyResult
    }
}
