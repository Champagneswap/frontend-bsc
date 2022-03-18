(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 94131:
/***/ (() => {

global.__rewriteFramesDistDir__ = '.next';


/***/ }),

/***/ 55561:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58097);
/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({
    dsn: SENTRY_DSN || 'https://ed98e16b9d704c22bef92d24bdd5f3b7@o1092725.ingest.sentry.io/6111410',
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 0.1
});


/***/ }),

/***/ 13442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15941);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68605);
/* harmony import */ var utils_web3React__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12338);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99150);
/* harmony import */ var contexts_ToastsContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55083);
/* harmony import */ var hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38472);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__, state_user_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__]);
([swr__WEBPACK_IMPORTED_MODULE_5__, state_user_hooks__WEBPACK_IMPORTED_MODULE_7__, hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ThemeProviderWrapper = (props)=>{
    const [isDark] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useThemeManager */ .HY)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {
        theme: isDark ? _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.dark : _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.light,
        ...props
    }));
};
const Providers = ({ children , store  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.Web3ReactProvider, {
        getLibrary: utils_web3React__WEBPACK_IMPORTED_MODULE_8__/* .getLibrary */ .av,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
            store: store,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_ToastsContext__WEBPACK_IMPORTED_MODULE_10__/* .ToastsProvider */ .d0, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeProviderWrapper, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_Localization__WEBPACK_IMPORTED_MODULE_9__/* .LanguageProvider */ .iL, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_5__.SWRConfig, {
                            value: {
                                use: [
                                    hooks_useSWRContract__WEBPACK_IMPORTED_MODULE_11__/* .fetchStatusMiddleware */ .qf
                                ]
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalProvider, {
                                children: children
                            })
                        })
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Providers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99150);





const GradientModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalHeader).withConfig({
    componentId: "sc-f87afc28-0"
})`
  background: ${({ theme  })=>theme.colors.gradients.bubblegum
};
  padding-bottom: 24px;
  padding-top: 24px;
`;
const BlockCountryModal = ({ onDismiss  })=>{
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const [checked, setCheck] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalContainer, {
        title: t('Warning'),
        minWidth: "320px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GradientModalHeader, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalTitle, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                        scale: "lg",
                        children: t('Warning')
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                p: "24px",
                maxWidth: "400px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        as: "p",
                        color: "textSubtle",
                        mb: "24px",
                        children: [
                            t('Please note that by UTC 00:00 9th March 2022, access will not be available to users with IP address from the following countries:'),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            t('Belarus, Cuba, Democratic Republic of Congo, Iran, Iraq, North Korea, Sudan, Syria, Zimbabwe and Crimea.')
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "block-checkbox",
                        style: {
                            display: 'block',
                            cursor: 'pointer',
                            marginBottom: '24px'
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        flex: 'none'
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
                                        id: "block-checkbox",
                                        scale: "sm",
                                        checked: checked,
                                        onChange: ()=>setCheck((prevState)=>!prevState
                                            )
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    ml: "8px",
                                    children: t('I understand')
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        disabled: !checked,
                        id: "prediction-disclaimer-continue",
                        width: "100%",
                        onClick: onDismiss,
                        children: t('Continue')
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockCountryModal);


/***/ }),

/***/ 5418:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69915);
/* harmony import */ var config_constants_cookie_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74792);
/* harmony import */ var _BlockCountryModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80726);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
js_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function BlockCountry() {
    const [showModal] = (0,_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.useModal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlockCountryModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), false);
    const showModalRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(showModal);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const isBlockCountry = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get(config_constants_cookie_names__WEBPACK_IMPORTED_MODULE_5__/* .BLOCK_COUNTRIES_COOKIE_NAME */ .G);
        if (isBlockCountry) {
            showModalRef.current();
        }
    }, [
        showModalRef
    ]);
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockCountry);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ EasterEgg_EasterEgg)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@champagneswap/uikit"
var uikit_ = __webpack_require__(83916);
;// CONCATENATED MODULE: ./src/components/EasterEgg/EasterEgg.tsx



const EasterEgg = (props)=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const startFalling = (0,external_react_.useCallback)(()=>setShow(true)
    , [
        setShow
    ]);
    (0,uikit_.useKonamiCheatCode)(startFalling);
    if (show) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            onAnimationEnd: ()=>setShow(false)
            ,
            children: /*#__PURE__*/ jsx_runtime_.jsx(uikit_.FallingBunnies, {
                ...props
            })
        }));
    }
    return null;
};
/* harmony default export */ const EasterEgg_EasterEgg = (/*#__PURE__*/external_react_default().memo(EasterEgg));

;// CONCATENATED MODULE: ./src/components/EasterEgg/index.ts



/***/ }),

/***/ 89452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15427);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sentry_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9770);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99150);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__]);
components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ErrorBoundary({ children  }) {
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sentry_react__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, {
        fallback: ()=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Flex, {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.LogoIcon, {
                            width: "64px",
                            mb: "8px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                            mb: "16px",
                            children: t('Oops, something wrong.')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            onClick: ()=>window.location.reload()
                            ,
                            children: t('Click here to reset!')
                        })
                    ]
                })
            }));
        },
        children: children
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 83408:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__]);
_ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var utils_contractHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53918);







const AnniversaryAchievementModal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\GlobalCheckClaimStatus\\index.tsx -> " + "./AnniversaryAchievementModal"
        ]
    },
    ssr: false
});
// change it to true if we have events to check claim status
const enable = false;
const GlobalCheckClaimStatus = (props)=>{
    if (!enable) {
        return null;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalCheckClaim, {
        ...props
    }));
};
/**
 * This is represented as a component rather than a hook because we need to keep it
 * inside the Router.
 *
 * TODO: Put global checks in redux or make a generic area to house global checks
 */ const GlobalCheckClaim = ({ excludeLocations  })=>{
    const hasDisplayedModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { 0: canClaimAnniversaryPoints , 1: setCanClaimAnniversaryPoints  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [onPresentAnniversaryModal] = (0,_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.useModal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnniversaryAchievementModal, {}));
    // Check claim status
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchClaimAnniversaryStatus = async ()=>{
            const { canClaim  } = (0,utils_contractHelpers__WEBPACK_IMPORTED_MODULE_6__/* .getAnniversaryAchievementContract */ .f$)();
            const canClaimAnniversary = await canClaim(account);
            setCanClaimAnniversaryPoints(canClaimAnniversary);
        };
        if (account) {
            fetchClaimAnniversaryStatus();
        }
    }, [
        account
    ]);
    // Check if we need to display the modal
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const matchesSomeLocations = excludeLocations.some((location)=>pathname.includes(location)
        );
        if (canClaimAnniversaryPoints && !matchesSomeLocations && !hasDisplayedModal.current) {
            onPresentAnniversaryModal();
            hasDisplayedModal.current = true;
        }
    }, [
        pathname,
        excludeLocations,
        hasDisplayedModal,
        onPresentAnniversaryModal,
        canClaimAnniversaryPoints
    ]);
    // Reset the check flag when account changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        hasDisplayedModal.current = false;
    }, [
        account,
        hasDisplayedModal
    ]);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalCheckClaimStatus);


/***/ }),

/***/ 47414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99150);





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Flex).withConfig({
    componentId: "sc-33f476de-0"
})`
  align-items: center;
  background-color: ${({ theme  })=>theme.colors.dropdown
};
  border-radius: 16px;
  position: relative;
`;
const Address = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-33f476de-1"
})`
  flex: 1;
  position: relative;
  padding-left: 16px;

  & > input {
    background: transparent;
    border: 0;
    color: ${({ theme  })=>theme.colors.text
};
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    background: linear-gradient(
      to right,
      ${({ theme  })=>theme.colors.background
}00,
      ${({ theme  })=>theme.colors.background
}E6
    );
    content: '';
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`;
const Tooltip = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-33f476de-2"
})`
  display: ${({ isTooltipDisplayed  })=>isTooltipDisplayed ? 'inline-block' : 'none'
};
  position: absolute;
  padding: 8px;
  top: -38px;
  right: 0;
  text-align: center;
  background-color: ${({ theme  })=>theme.colors.contrast
};
  color: ${({ theme  })=>theme.colors.invertedContrast
};
  border-radius: 16px;
  opacity: 0.7;
  width: 100px;
`;
const CopyAddress = ({ account , ...props })=>{
    const { 0: isTooltipDisplayed , 1: setIsTooltipDisplayed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const copyAddress = ()=>{
        if (navigator.clipboard && navigator.permissions) {
            navigator.clipboard.writeText(account).then(()=>displayTooltip()
            );
        } else if (document.queryCommandSupported('copy')) {
            const ele = document.createElement('textarea');
            ele.value = account;
            document.body.appendChild(ele);
            ele.select();
            document.execCommand('copy');
            document.body.removeChild(ele);
            displayTooltip();
        }
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(()=>{
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "relative",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Address, {
                        title: account,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            readOnly: true,
                            value: account
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        variant: "text",
                        onClick: copyAddress,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.CopyIcon, {
                            color: "primary",
                            width: "24px"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tooltip, {
                isTooltipDisplayed: isTooltipDisplayed,
                children: t('Copied')
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyAddress);


/***/ }),

/***/ 63111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99150);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1940);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);








const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e4d9bf7e-0"
})`
  background-color: ${({ theme  })=>theme.colors.failure
};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`;
const ProfileUserMenuItem = ({ isLoading , hasProfile , disabled  })=>{
    const { account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const handleClick = ()=>{
        router.push(`${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_6__/* .nftsBaseUrl */ .Vf}/profile/${account.toLowerCase()}/achievements`);
    };
    const handleNoProfileClick = ()=>{
        router.push('/create-profile');
    };
    if (isLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuItem, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {
                height: "24px",
                width: "35%"
            })
        }));
    }
    if (!hasProfile) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuItem, {
            as: "button",
            disabled: disabled,
            onClick: handleNoProfileClick,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                children: [
                    t('Make a Profile'),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {})
                ]
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuItem, {
        as: "button",
        disabled: disabled,
        onClick: handleClick,
        children: t('Your Profile')
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileUserMenuItem);


/***/ }),

/***/ 70756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_constants_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29748);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97971);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99150);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78470);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24319);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61266);
/* harmony import */ var utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65044);
/* harmony import */ var _CopyAddress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47414);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__]);
hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const WalletInfo = ({ hasLowBnbBalance , onDismiss  })=>{
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const { account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
    const { balance , fetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__/* .useGetBnbBalance */ .nu)();
    const { balance: chamBalance , fetchStatus: chamFetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(config_constants_tokens__WEBPACK_IMPORTED_MODULE_3__/* ["default"].cham.address */ .ZP.cham.address);
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const handleLogout = ()=>{
        onDismiss();
        logout();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: "secondary",
                fontSize: "12px",
                textTransform: "uppercase",
                fontWeight: "bold",
                mb: "8px",
                children: t('Your Address')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CopyAddress__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                account: account,
                mb: "24px"
            }),
            hasLowBnbBalance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Message, {
                variant: "warning",
                mb: "24px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontWeight: "bold",
                            children: t('BNB Balance Low')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            as: "p",
                            children: t('You need BNB for transaction fees.')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "textSubtle",
                        children: t('BNB Balance')
                    }),
                    fetchStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .FetchStatus.Fetched */ .iF.Fetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        height: "22px",
                        width: "60px"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .formatBigNumber */ .dp)(balance, 6)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "24px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "textSubtle",
                        children: t('CHAM Balance')
                    }),
                    chamFetchStatus !== config_constants_types__WEBPACK_IMPORTED_MODULE_4__/* .FetchStatus.Fetched */ .iF.Fetched ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        height: "22px",
                        width: "60px"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: (0,utils_formatBalance__WEBPACK_IMPORTED_MODULE_10__/* .getFullDisplayBalance */ .NJ)(chamBalance, 18, 3)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                alignItems: "center",
                justifyContent: "end",
                mb: "24px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.LinkExternal, {
                    href: (0,utils__WEBPACK_IMPORTED_MODULE_9__/* .getBscScanLink */ .s6)(account, 'address'),
                    children: t('View on BscScan')
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.Button, {
                variant: "secondary",
                width: "100%",
                onClick: handleLogout,
                children: t('Disconnect Wallet')
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 85245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L9": () => (/* binding */ WalletView),
/* harmony export */   "Gh": () => (/* binding */ LOW_BNB_BALANCE),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93138);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99150);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24319);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97971);
/* harmony import */ var _WalletInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70756);
/* harmony import */ var _WalletTransactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67865);
/* harmony import */ var _WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_6__, _WalletInfo__WEBPACK_IMPORTED_MODULE_8__]);
([hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_6__, _WalletInfo__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











var WalletView;
(function(WalletView) {
    WalletView[WalletView["WALLET_INFO"] = 0] = "WALLET_INFO";
    WalletView[WalletView["TRANSACTIONS"] = 1] = "TRANSACTIONS";
    WalletView[WalletView["WRONG_NETWORK"] = 2] = "WRONG_NETWORK";
})(WalletView || (WalletView = {}));
const LOW_BNB_BALANCE = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_3__.parseUnits)('2', 'gwei');
const ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalHeader).withConfig({
    componentId: "sc-f5eb5ce7-0"
})`
  background: ${({ theme  })=>theme.colors.gradients.bubblegum
};
`;
const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-f5eb5ce7-1"
})`
  background-color: ${({ theme  })=>theme.colors.dropdown
};
  border-bottom: 1px solid ${({ theme  })=>theme.colors.cardBorder
};
  padding: 16px 24px;
`;
const WalletModal = ({ initialView =WalletView.WALLET_INFO , onDismiss  })=>{
    const { 0: view , 1: setView  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialView);
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const { balance , fetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_6__/* .useGetBnbBalance */ .nu)();
    const hasLowBnbBalance = fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_7__/* .FetchStatus.Fetched */ .iF.Fetched && balance.lte(LOW_BNB_BALANCE);
    const handleClick = (newIndex)=>{
        setView(newIndex);
    };
    const TabsComponent = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tabs, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ButtonMenu, {
                scale: "sm",
                variant: "subtle",
                onItemClick: handleClick,
                activeIndex: view,
                fullWidth: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ButtonMenuItem, {
                        children: t('Wallet')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ButtonMenuItem, {
                        children: t('Transactions')
                    })
                ]
            })
        })
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalContainer, {
        title: t('Welcome!'),
        minWidth: "320px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ModalHeader, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalTitle, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                            children: t('Your Wallet')
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                        variant: "text",
                        onClick: onDismiss,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {
                            width: "24px",
                            color: "text"
                        })
                    })
                ]
            }),
            view !== WalletView.WRONG_NETWORK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TabsComponent, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                p: "24px",
                maxWidth: "400px",
                width: "100%",
                children: [
                    view === WalletView.WALLET_INFO && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletInfo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        hasLowBnbBalance: hasLowBnbBalance,
                        onDismiss: onDismiss
                    }),
                    view === WalletView.TRANSACTIONS && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletTransactions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    view === WalletView.WRONG_NETWORK && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletWrongNetwork__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        onDismiss: onDismiss
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 67865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UserMenu_WalletTransactions)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@champagneswap/uikit"
var uikit_ = __webpack_require__(83916);
// EXTERNAL MODULE: ./src/state/transactions/hooks.tsx
var hooks = __webpack_require__(55892);
// EXTERNAL MODULE: ./src/contexts/Localization/index.tsx + 3 modules
var Localization = __webpack_require__(99150);
// EXTERNAL MODULE: ./src/hooks/useActiveWeb3React.ts
var useActiveWeb3React = __webpack_require__(64011);
// EXTERNAL MODULE: ./src/state/transactions/actions.ts
var actions = __webpack_require__(81564);
// EXTERNAL MODULE: external "lodash/orderBy"
var orderBy_ = __webpack_require__(49949);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(57518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/utils/index.ts + 2 modules
var utils = __webpack_require__(61266);
;// CONCATENATED MODULE: ./src/components/Menu/UserMenu/TransactionRow.tsx






const TxnIcon = external_styled_components_default()(uikit_.Flex).withConfig({
    componentId: "sc-6853ba53-0"
})`
  align-items: center;
  flex: none;
  width: 24px;
`;
const Summary = external_styled_components_default().div.withConfig({
    componentId: "sc-6853ba53-1"
})`
  flex: 1;
  padding: 0 8px;
`;
const TxnLink = external_styled_components_default()(uikit_.Link).withConfig({
    componentId: "sc-6853ba53-2"
})`
  align-items: center;
  color: ${({ theme  })=>theme.colors.text
};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`;
const renderIcon = (txn)=>{
    var ref, ref1;
    if (!txn.receipt) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(uikit_.RefreshIcon, {
            spin: true,
            width: "24px"
        }));
    }
    return ((ref = txn.receipt) === null || ref === void 0 ? void 0 : ref.status) === 1 || typeof ((ref1 = txn.receipt) === null || ref1 === void 0 ? void 0 : ref1.status) === 'undefined' ? /*#__PURE__*/ jsx_runtime_.jsx(uikit_.CheckmarkCircleIcon, {
        color: "success",
        width: "24px"
    }) : /*#__PURE__*/ jsx_runtime_.jsx(uikit_.BlockIcon, {
        color: "failure",
        width: "24px"
    });
};
const TransactionRow = ({ txn  })=>{
    const { chainId  } = (0,useActiveWeb3React/* default */.Z)();
    if (!txn) {
        return null;
    }
    var _summary;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(TxnLink, {
        href: (0,utils/* getBscScanLink */.s6)(txn.hash, 'transaction', chainId),
        external: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TxnIcon, {
                children: renderIcon(txn)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Summary, {
                children: (_summary = txn.summary) !== null && _summary !== void 0 ? _summary : txn.hash
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TxnIcon, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(uikit_.OpenNewIcon, {
                    width: "24px",
                    color: "primary"
                })
            })
        ]
    }));
};
/* harmony default export */ const UserMenu_TransactionRow = (TransactionRow);

;// CONCATENATED MODULE: ./src/components/Menu/UserMenu/WalletTransactions.tsx










const WalletTransactions = ()=>{
    const { chainId  } = (0,useActiveWeb3React/* default */.Z)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { t  } = (0,Localization/* useTranslation */.$G)();
    const allTransactions = (0,hooks/* useAllTransactions */.kf)();
    const sortedTransactions = orderBy_default()(Object.values(allTransactions).filter(hooks/* isTransactionRecent */.mH), 'addedTime', 'desc');
    const handleClearAll = ()=>{
        if (chainId) {
            dispatch((0,actions/* clearAllTransactions */.fY)({
                chainId
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(uikit_.Box, {
        minHeight: "120px",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(uikit_.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                mb: "24px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(uikit_.Text, {
                        color: "secondary",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        children: t('Recent Transactions')
                    }),
                    sortedTransactions.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(uikit_.Button, {
                        scale: "sm",
                        onClick: handleClearAll,
                        variant: "text",
                        px: "0",
                        children: t('Clear all')
                    })
                ]
            }),
            sortedTransactions.length > 0 ? sortedTransactions.map((txn)=>/*#__PURE__*/ jsx_runtime_.jsx(UserMenu_TransactionRow, {
                    txn: txn
                }, txn.hash)
            ) : /*#__PURE__*/ jsx_runtime_.jsx(uikit_.Text, {
                textAlign: "center",
                children: t('No recent transactions')
            })
        ]
    }));
};
/* harmony default export */ const UserMenu_WalletTransactions = (WalletTransactions);


/***/ }),

/***/ 68837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99150);




const WalletUserMenuItem = ({ hasLowBnbBalance , isWrongNetwork , onPresentWalletModal ,  })=>{
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.UserMenuItem, {
        as: "button",
        onClick: onPresentWalletModal,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                t('Wallet'),
                hasLowBnbBalance && !isWrongNetwork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.WarningIcon, {
                    color: "warning",
                    width: "24px"
                }),
                isWrongNetwork && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_2__.WarningIcon, {
                    color: "failure",
                    width: "24px"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletUserMenuItem);


/***/ }),

/***/ 86557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99150);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49058);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7__);








const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Link).withConfig({
    componentId: "sc-5498791f-0"
})`
  width: 100%;
  &:hover {
    text-decoration: initial;
  }
`;
const WalletWrongNetwork = ({ onDismiss  })=>{
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const { connector  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.useWeb3React)();
    const handleSwitchNetwork = async ()=>{
        await (0,utils_wallet__WEBPACK_IMPORTED_MODULE_5__/* .setupNetwork */ .Y)();
        onDismiss();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Text, {
                mb: "24px",
                children: t('You’re connected to the wrong network.')
            }),
            connector instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_7__.InjectedConnector && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Button, {
                onClick: handleSwitchNetwork,
                mb: "24px",
                children: t('Switch Network')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledLink, {
                href: "https://docs.pancakeswap.finance/get-started/connection-guide",
                external: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    width: "100%",
                    variant: "secondary",
                    children: [
                        t('Learn How'),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__.HelpIcon, {
                            color: "primary",
                            ml: "6px"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletWrongNetwork);


/***/ }),

/***/ 71989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78470);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89424);
/* harmony import */ var state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55892);
/* harmony import */ var components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30621);
/* harmony import */ var hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24319);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99150);
/* harmony import */ var views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1940);
/* harmony import */ var config_constants_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97971);
/* harmony import */ var _WalletModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85245);
/* harmony import */ var _ProfileUserMenutItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63111);
/* harmony import */ var _WalletUserMenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_9__, _WalletModal__WEBPACK_IMPORTED_MODULE_13__]);
([state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__, hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_9__, _WalletModal__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const UserMenu = ()=>{
    var ref, ref1;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .$G)();
    const { account , error  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
    const { logout  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { hasPendingTransactions , pendingNumber  } = (0,state_transactions_hooks__WEBPACK_IMPORTED_MODULE_7__/* .usePendingTransactions */ .VQ)();
    const { balance , fetchStatus  } = (0,hooks_useTokenBalance__WEBPACK_IMPORTED_MODULE_9__/* .useGetBnbBalance */ .nu)();
    const { isInitialized , isLoading , profile  } = (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useProfile */ .Un)();
    const [onPresentWalletModal] = (0,_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.useModal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        initialView: _WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .WalletView.WALLET_INFO */ .L9.WALLET_INFO
    }));
    const [onPresentTransactionModal] = (0,_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.useModal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        initialView: _WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .WalletView.TRANSACTIONS */ .L9.TRANSACTIONS
    }));
    const [onPresentWrongNetworkModal] = (0,_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.useModal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .ZP, {
        initialView: _WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .WalletView.WRONG_NETWORK */ .L9.WRONG_NETWORK
    }));
    const hasProfile = isInitialized && !!profile;
    const avatarSrc = profile === null || profile === void 0 ? void 0 : (ref = profile.nft) === null || ref === void 0 ? void 0 : (ref1 = ref.image) === null || ref1 === void 0 ? void 0 : ref1.thumbnail;
    const hasLowBnbBalance = fetchStatus === config_constants_types__WEBPACK_IMPORTED_MODULE_12__/* .FetchStatus.Fetched */ .iF.Fetched && balance.lte(_WalletModal__WEBPACK_IMPORTED_MODULE_13__/* .LOW_BNB_BALANCE */ .Gh);
    const { 0: userMenuText , 1: setUserMenuText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: userMenuVariable , 1: setUserMenuVariable  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('default');
    const isWrongNetwork = error && error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.UnsupportedChainIdError;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (hasPendingTransactions) {
            setUserMenuText(t('%num% Pending', {
                num: pendingNumber
            }));
            setUserMenuVariable('pending');
        } else {
            setUserMenuText('');
            setUserMenuVariable('default');
        }
    }, [
        hasPendingTransactions,
        pendingNumber,
        t
    ]);
    const onClickWalletMenu = ()=>{
        if (isWrongNetwork) {
            onPresentWrongNetworkModal();
        } else {
            onPresentWalletModal();
        }
    };
    const UserMenuItems = ()=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletUserMenuItem__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                    hasLowBnbBalance: hasLowBnbBalance,
                    isWrongNetwork: isWrongNetwork,
                    onPresentWalletModal: onClickWalletMenu
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuItem, {
                    as: "button",
                    disabled: isWrongNetwork,
                    onClick: onPresentTransactionModal,
                    children: [
                        t('Recent Transactions'),
                        hasPendingTransactions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.RefreshIcon, {
                            spin: true
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuDivider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuItem, {
                    as: "button",
                    disabled: isWrongNetwork,
                    onClick: ()=>router.push(`${views_Nft_market_constants__WEBPACK_IMPORTED_MODULE_11__/* .nftsBaseUrl */ .Vf}/profile/${account.toLowerCase()}`)
                    ,
                    children: t('Your NFTs')
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileUserMenutItem__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    isLoading: isLoading,
                    hasProfile: hasProfile,
                    disabled: isWrongNetwork
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuDivider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenuItem, {
                    as: "button",
                    onClick: logout,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        children: [
                            t('Disconnect'),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.LogoutIcon, {})
                        ]
                    })
                })
            ]
        }));
    };
    if (account) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenu, {
            account: account,
            avatarSrc: avatarSrc,
            text: userMenuText,
            variant: userMenuVariable,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserMenuItems, {})
        }));
    }
    if (isWrongNetwork) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.UserMenu, {
            text: t('Network'),
            variant: "danger",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserMenuItems, {})
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ConnectWalletButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        scale: "sm"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 41860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_0__);

const config = (t)=>[
        {
            label: t('Trade'),
            icon: 'Swap',
            href: '/swap',
            showItemsOnMobile: false,
            items: [
                {
                    label: t('Exchange'),
                    href: '/swap'
                },
                {
                    label: t('Liquidity'),
                    href: '/liquidity'
                },
                {
                    label: t('Migration'),
                    href: '/migration'
                }, 
            ]
        },
        {
            label: t('Earn'),
            href: '/farms',
            icon: 'Earn',
            items: [
                {
                    label: t('Farms'),
                    href: '/farms'
                },
                {
                    label: t('Pools'),
                    href: '/pools'
                }, 
            ]
        },
        {
            label: t('Info'),
            href: '/info',
            icon: 'Earn',
            items: []
        },
        {
            label: '',
            href: '/info',
            icon: 'More',
            hideSubNav: true,
            items: [
                {
                    label: t('Voting'),
                    href: '/voting'
                },
                {
                    type: _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuItemType.DIVIDER
                },
                {
                    label: t('Blog'),
                    href: 'https://medium.com/champagneswap',
                    type: _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuItemType.EXTERNAL_LINK
                },
                {
                    label: t('Docs'),
                    href: 'https://docs.champagneswap.com',
                    type: _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuItemType.EXTERNAL_LINK
                }, 
            ]
        }, 
    ]
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ 17794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ footerLinks)
/* harmony export */ });
const footerLinks = (t)=>[
        {
            label: t('About'),
            items: [
                {
                    label: t('Contact'),
                    href: 'https://docs.champagneswap.com/contact-us'
                },
                {
                    label: t('Brand'),
                    href: 'https://docs.champagneswap.com/brand'
                },
                {
                    label: t('Blog'),
                    href: 'https://medium.com/champagneswap'
                },
                {
                    label: t('Community'),
                    href: 'https://docs.champagneswap.com/contact-us/telegram'
                },
                {
                    label: t('CHAM token'),
                    href: 'https://champagneswap.com/tokenomics/cake'
                }, 
            ]
        },
        {
            label: t('Help'),
            items: [
                {
                    label: t('Customer Support'),
                    href: 'https://docs.champagneswap.com/contact-us/customer-support'
                },
                {
                    label: t('Troubleshooting'),
                    href: 'https://docs.champagneswap.com/help/troubleshooting'
                },
                {
                    label: t('Guides'),
                    href: 'https://docs.champagneswap.com/get-started'
                }, 
            ]
        },
        {
            label: t('Developers'),
            items: [
                {
                    label: 'Github',
                    href: 'https://github.com/champagneswap'
                },
                {
                    label: t('Documentation'),
                    href: 'https://docs.champagneswap.com'
                },
                {
                    label: t('Bug Bounty'),
                    href: 'https://docs.champagneswap.com/code/bug-bounty'
                }, 
            ]
        }, 
    ]
;


/***/ }),

/***/ 32485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53629);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var config_localization_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49821);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99150);
/* harmony import */ var components_PhishingWarningBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56134);
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23917);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8733);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68605);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41860);
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71989);
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24339);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51733);
/* harmony import */ var _config_footerConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_PhishingWarningBanner__WEBPACK_IMPORTED_MODULE_7__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__, state_user_hooks__WEBPACK_IMPORTED_MODULE_10__, _UserMenu__WEBPACK_IMPORTED_MODULE_12__, _GlobalSettings__WEBPACK_IMPORTED_MODULE_13__]);
([components_PhishingWarningBanner__WEBPACK_IMPORTED_MODULE_7__, hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__, state_user_hooks__WEBPACK_IMPORTED_MODULE_10__, _UserMenu__WEBPACK_IMPORTED_MODULE_12__, _GlobalSettings__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Menu = (props)=>{
    const { isDark , toggleTheme  } = (0,hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const chamPriceUsd = (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_9__/* .usePriceChamBusd */ .ZS)();
    const { currentLanguage , setLanguage , t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$G)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [showPhishingWarningBanner] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_10__/* .usePhishingBannerManager */ .FT)();
    const activeMenuItem = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .getActiveMenuItem */ .t)({
        menuConfig: (0,_config_config__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(t),
        pathname
    });
    const activeSubMenuItem = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .getActiveSubMenuItem */ .u)({
        menuItem: activeMenuItem,
        pathname
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_4__.Menu, {
        linkComponent: (linkProps)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_3__/* .NextLinkFromReactRouter */ .a, {
                to: linkProps.href,
                ...linkProps,
                prefetch: false
            }));
        },
        userMenu: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserMenu__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
        globalMenu: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GlobalSettings__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
        banner: showPhishingWarningBanner && "undefined" !== 'undefined' && /*#__PURE__*/ 0,
        isDark: isDark,
        toggleTheme: toggleTheme,
        currentLang: currentLanguage.code,
        langs: config_localization_languages__WEBPACK_IMPORTED_MODULE_5__/* .languageList */ .s0,
        setLang: setLanguage,
        chamPriceUsd: chamPriceUsd.toNumber(),
        links: (0,_config_config__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(t),
        subLinks: (activeMenuItem === null || activeMenuItem === void 0 ? void 0 : activeMenuItem.hideSubNav) ? [] : activeMenuItem === null || activeMenuItem === void 0 ? void 0 : activeMenuItem.items,
        footerLinks: (0,_config_footerConfig__WEBPACK_IMPORTED_MODULE_15__/* .footerLinks */ .d)(t),
        activeItem: activeMenuItem === null || activeMenuItem === void 0 ? void 0 : activeMenuItem.href,
        activeSubItem: activeSubMenuItem === null || activeSubMenuItem === void 0 ? void 0 : activeSubMenuItem.href,
        buyChamLabel: t('Buy CHAM'),
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 51733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getActiveMenuItem),
/* harmony export */   "u": () => (/* binding */ getActiveSubMenuItem)
/* harmony export */ });
const getActiveMenuItem = ({ pathname , menuConfig  })=>menuConfig.find((menuItem)=>pathname.startsWith(menuItem.href) || getActiveSubMenuItem({
            menuItem,
            pathname
        })
    )
;
const getActiveSubMenuItem = ({ pathname , menuItem  })=>{
    var ref;
    const activeSubMenuItems = (ref = menuItem === null || menuItem === void 0 ? void 0 : menuItem.items.filter((subMenuItem)=>pathname.startsWith(subMenuItem.href)
    )) !== null && ref !== void 0 ? ref : [];
    // Pathname doesn't include any submenu item href - return undefined
    if (!activeSubMenuItems || activeSubMenuItems.length === 0) {
        return undefined;
    }
    // Pathname includes one sub menu item href - return it
    if (activeSubMenuItems.length === 1) {
        return activeSubMenuItems[0];
    }
    // Pathname includes multiple sub menu item hrefs - find the most specific match
    const mostSpecificMatch = activeSubMenuItems.sort((subMenuItem1, subMenuItem2)=>subMenuItem2.href.length - subMenuItem1.href.length
    )[0];
    return mostSpecificMatch;
};


/***/ }),

/***/ 56134:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99150);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_5__]);
state_user_hooks__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.Flex).withConfig({
    componentId: "sc-d4fef46f-0"
})`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
  background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),
    linear-gradient(180deg, #8051d6 0%, #492286 100%);
  ${({ theme  })=>theme.mediaQueries.md
} {
    padding: 0px;
    background: linear-gradient(180deg, #8051d6 0%, #492286 100%);
  }
`;
const InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.Flex).withConfig({
    componentId: "sc-d4fef46f-1"
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const SpeechBubble = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d4fef46f-2"
})`
  background: rgba(39, 38, 44, 0.4);
  border-radius: 16px;
  padding: 8px;
  width: 60%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & ${_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_3__.Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`;
const PhishingWarningBanner = ()=>{
    const { t  } = useTranslation();
    const [, hideBanner] = usePhishingBannerManager();
    const { isMobile , isMd  } = useMatchBreakpoints();
    const warningText = t("In one click move your liquidity to ChampagneSwap from PancakeSwap");
    const warningTextAsParts = warningText.split(/(https:\/\/pancakeswap.finance)/g);
    const warningTextComponent = /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Text, {
                as: "span",
                color: "warning",
                small: true,
                bold: true,
                textTransform: "uppercase",
                children: t('Make Money migrate your liquidity to ChampagneSwap: ')
            }),
            warningTextAsParts.map((text, i)=>/*#__PURE__*/ _jsx(Text, {
                    small: true,
                    as: "span",
                    bold: text === 'https://champagneswap.com',
                    color: text === 'https://champagneswap.com' ? '#FFFFFF' : '#BDC2C4',
                    children: text
                }, i)
            )
        ]
    });
    return(/*#__PURE__*/ _jsx(Container, {
        children: isMobile || isMd ? /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsx(Box, {
                    children: warningTextComponent
                }),
                /*#__PURE__*/ _jsx(IconButton, {
                    onClick: hideBanner,
                    variant: "text",
                    children: /*#__PURE__*/ _jsx(CloseIcon, {
                        color: "#FFFFFF"
                    })
                })
            ]
        }) : /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ _jsxs(InnerContainer, {
                    children: [
                        /*#__PURE__*/ _jsxs("picture", {
                            children: [
                                /*#__PURE__*/ _jsx("source", {
                                    type: "image/webp",
                                    srcSet: "/images/decorations/phishing-warning-bunny.webp"
                                }),
                                /*#__PURE__*/ _jsx("source", {
                                    type: "image/png",
                                    srcSet: "/images/decorations/phishing-warning-bunny.png"
                                }),
                                /*#__PURE__*/ _jsx("img", {
                                    src: "/images/decorations/phishing-warning-bunny.png",
                                    alt: "phishing-warning",
                                    width: "92px"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(SpeechBubble, {
                            children: warningTextComponent
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(IconButton, {
                    onClick: hideBanner,
                    variant: "text",
                    children: /*#__PURE__*/ _jsx(CloseIcon, {
                        color: "#FFFFFF"
                    })
                })
            ]
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (PhishingWarningBanner)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33206);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99150);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68605);
/* harmony import */ var hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89901);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_user_hooks__WEBPACK_IMPORTED_MODULE_6__, hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__]);
([state_user_hooks__WEBPACK_IMPORTED_MODULE_6__, hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Card).withConfig({
    componentId: "sc-d479bee6-0"
})`
  border-radius: 8px;
  > div {
    border-radius: 8px;
  }
`;
const IndicatorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Box).withConfig({
    componentId: "sc-d479bee6-1"
})`
  display: flex;
  align-items: center;
  gap: 7px;
`;
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Box).withConfig({
    componentId: "sc-d479bee6-2"
})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color , theme  })=>theme.colors[$color]
};
`;
const indicator = (t)=>({
        delayed: {
            label: t('Delayed'),
            color: 'failure',
            description: t('Subgraph is currently experiencing delays due to BSC issues. Performance may suffer until subgraph is restored.')
        },
        slow: {
            label: t('Slight delay'),
            color: 'warning',
            description: t('Subgraph is currently experiencing delays due to BSC issues. Performance may suffer until subgraph is restored.')
        },
        healthy: {
            label: t('Fast'),
            color: 'success',
            description: t('No issues with the subgraph.')
        }
    })
;
const getIndicator = (sgStatus)=>{
    if (sgStatus === hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__/* .SubgraphStatus.NOT_OK */ .r.NOT_OK) {
        return 'delayed';
    }
    if (sgStatus === hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__/* .SubgraphStatus.WARNING */ .r.WARNING) {
        return 'slow';
    }
    return 'healthy';
};
const SubgraphHealthIndicator = ()=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const isOnNftPages = pathname.includes('nfts');
    return isOnNftPages ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubgraphHealth, {}) : null;
};
const SubgraphHealth = ()=>{
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    const { status , currentBlock , blockDifference , latestBlock  } = (0,hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [alwaysShowIndicator] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSubgraphHealthIndicatorManager */ .YF)();
    const forceIndicatorDisplay = status === hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__/* .SubgraphStatus.WARNING */ .r.WARNING || status === hooks_useSubgraphHealth__WEBPACK_IMPORTED_MODULE_7__/* .SubgraphStatus.NOT_OK */ .r.NOT_OK;
    const showIndicator = alwaysShowIndicator || forceIndicatorDisplay;
    const indicatorProps = indicator(t);
    const secondRemainingBlockSync = blockDifference * config__WEBPACK_IMPORTED_MODULE_1__/* .BSC_BLOCK_TIME */ .hJ;
    const indicatorValue = getIndicator(status);
    const current = indicatorProps[indicatorValue];
    const { targetRef , tooltipVisible , tooltip  } = (0,_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.useTooltip)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TooltipContent, {
        currentBlock: currentBlock,
        secondRemainingBlockSync: secondRemainingBlockSync,
        blockNumberFromSubgraph: latestBlock,
        ...current
    }), {
        placement: 'top'
    });
    if (!latestBlock || !currentBlock || !showIndicator) {
        return null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Box, {
        position: "fixed",
        bottom: "55px",
        right: "5%",
        ref: targetRef,
        "data-test": "subgraph-health-indicator",
        children: [
            tooltipVisible && tooltip,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCard, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IndicatorWrapper, {
                    p: "10px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                            $color: current.color
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                            children: current.label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.InfoIcon, {})
                    ]
                })
            })
        ]
    }));
};
const TooltipContent = ({ color , label , description , currentBlock , secondRemainingBlockSync , blockNumberFromSubgraph ,  })=>{
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IndicatorWrapper, {
                pb: "10px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dot, {
                        $color: color
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                        children: label
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                pb: "24px",
                children: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        children: [
                            t('Chain Head Block'),
                            ":"
                        ]
                    }),
                    " ",
                    currentBlock
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        children: [
                            t('Latest Subgraph Block'),
                            ":"
                        ]
                    }),
                    " ",
                    blockNumberFromSubgraph
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_5__.Text, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        children: [
                            t('Delay'),
                            ":"
                        ]
                    }),
                    " ",
                    currentBlock - blockNumberFromSubgraph,
                    " (",
                    secondRemainingBlockSync,
                    "s)"
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubgraphHealthIndicator);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ BLOCK_COUNTRIES_COOKIE_NAME)
/* harmony export */ });
const BLOCK_COUNTRIES_COOKIE_NAME = 'isBlockCountry';


/***/ }),

/***/ 32987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78470);



const _binanceChainListener = async ()=>new Promise((resolve)=>Object.defineProperty(window, 'BinanceChain', {
            get () {
                return this.bsc;
            },
            set (bsc) {
                this.bsc = bsc;
                resolve();
            }
        })
    )
;
const useEagerConnect = ()=>{
    const { login  } = (0,hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const connectorId = window.localStorage.getItem(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.connectorLocalStorageKey);
        if (connectorId) {
            const isConnectorBinanceChain = connectorId === _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.ConnectorNames.BSC;
            const isBinanceChainDefined = Reflect.has(window, 'BinanceChain');
            // Currently BSC extension doesn't always inject in time.
            // We must check to see if it exists, and if not, wait for it before proceeding.
            if (isConnectorBinanceChain && !isBinanceChainDefined) {
                _binanceChainListener().then(()=>login(connectorId)
                );
                return;
            }
            login(connectorId);
        }
    }, [
        login
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEagerConnect);


/***/ }),

/***/ 63353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useInactiveListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82727);
/* harmony import */ var _utils_clearUserStates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18382);




const useInactiveListener = ()=>{
    const { account , chainId , connector  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .TL)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (account && connector) {
            const handleDeactivate = ()=>{
                (0,_utils_clearUserStates__WEBPACK_IMPORTED_MODULE_3__/* .clearUserStates */ .J)(dispatch, chainId);
            };
            connector.addListener('Web3ReactDeactivate', handleDeactivate);
            return ()=>{
                connector.removeListener('Web3ReactDeactivate', handleDeactivate);
            };
        }
        return undefined;
    }, [
        account,
        chainId,
        dispatch,
        connector
    ]);
};


/***/ }),

/***/ 76159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useInterval(callback, delay, leading = true) {
    const savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    // Remember the latest callback.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        savedCallback.current = callback;
    }, [
        callback
    ]);
    // Set up the interval.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function tick() {
            const { current  } = savedCallback;
            if (current) {
                current();
            }
        }
        if (delay !== null) {
            if (leading) tick();
            const id = setInterval(tick, delay);
            return ()=>clearInterval(id)
            ;
        }
        return undefined;
    }, [
        delay,
        leading
    ]);
};


/***/ }),

/***/ 94587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsWindowVisible)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isWindowVisible() {
    if (!(typeof document !== 'undefined' && 'visibilityState' in document)) {
        return true;
    }
    return document.visibilityState === 'visible';
}
/**
 * Returns whether the window is currently visible to the user.
 */ function useIsWindowVisible() {
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isWindowVisible());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!('visibilityState' in document)) return undefined;
        const handleVisibilityChange = ()=>{
            setIsVisible(isWindowVisible());
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return ()=>{
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [
        setIsVisible
    ]);
    return isVisible;
};


/***/ }),

/***/ 89667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15427);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64011);



function useSentryUser() {
    const { account  } = (0,_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (account) {
            _sentry_react__WEBPACK_IMPORTED_MODULE_0__.setUser({
                account
            });
        }
    }, [
        account
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSentryUser);


/***/ }),

/***/ 89901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ SubgraphStatus),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85906);
/* harmony import */ var utils_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35922);
/* harmony import */ var _useRefreshEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useRefreshEffect__WEBPACK_IMPORTED_MODULE_4__]);
_useRefreshEffect__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





var SubgraphStatus;
(function(SubgraphStatus) {
    SubgraphStatus[SubgraphStatus["OK"] = 0] = "OK";
    SubgraphStatus[SubgraphStatus["WARNING"] = 1] = "WARNING";
    SubgraphStatus[SubgraphStatus["NOT_OK"] = 2] = "NOT_OK";
    SubgraphStatus[SubgraphStatus["UNKNOWN"] = 3] = "UNKNOWN";
})(SubgraphStatus || (SubgraphStatus = {}));
const NOT_OK_BLOCK_DIFFERENCE = 200 // ~15 minutes delay
;
const WARNING_BLOCK_DIFFERENCE = 50 // ~2.5 minute delay
;
const useSubgraphHealth = ()=>{
    const { 0: sgHealth , 1: setSgHealth  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        status: SubgraphStatus.UNKNOWN,
        currentBlock: 0,
        chainHeadBlock: 0,
        latestBlock: 0,
        blockDifference: 0
    });
    (0,_useRefreshEffect__WEBPACK_IMPORTED_MODULE_4__/* .useSlowRefreshEffect */ .X)(()=>{
        const getSubgraphHealth = async ()=>{
            try {
                const { indexingStatusForCurrentVersion  } = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)(config_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .GRAPH_HEALTH */ .AM, graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
            query getNftMarketSubgraphHealth {
              indexingStatusForCurrentVersion(subgraphName: "pancakeswap/nft-market") {
                synced
                health
                chains {
                  chainHeadBlock {
                    number
                  }
                  latestBlock {
                    number
                  }
                }
              }
            }
          `);
                const currentBlock = await utils_providers__WEBPACK_IMPORTED_MODULE_3__/* .simpleRpcProvider.getBlockNumber */ .J.getBlockNumber();
                const isHealthy = indexingStatusForCurrentVersion.health === 'healthy';
                const chainHeadBlock = parseInt(indexingStatusForCurrentVersion.chains[0].chainHeadBlock.number);
                const latestBlock = parseInt(indexingStatusForCurrentVersion.chains[0].latestBlock.number);
                const blockDifference = currentBlock - latestBlock;
                // Sometimes subgraph might report old block as chainHeadBlock, so its important to compare
                // it with block retrieved from simpleRpcProvider.getBlockNumber()
                const chainHeadBlockDifference = currentBlock - chainHeadBlock;
                if (!isHealthy || blockDifference > NOT_OK_BLOCK_DIFFERENCE || chainHeadBlockDifference > NOT_OK_BLOCK_DIFFERENCE) {
                    setSgHealth({
                        status: SubgraphStatus.NOT_OK,
                        currentBlock,
                        chainHeadBlock,
                        latestBlock,
                        blockDifference
                    });
                } else if (blockDifference > WARNING_BLOCK_DIFFERENCE || chainHeadBlockDifference > WARNING_BLOCK_DIFFERENCE) {
                    setSgHealth({
                        status: SubgraphStatus.WARNING,
                        currentBlock,
                        chainHeadBlock,
                        latestBlock,
                        blockDifference
                    });
                } else {
                    setSgHealth({
                        status: SubgraphStatus.OK,
                        currentBlock,
                        chainHeadBlock,
                        latestBlock,
                        blockDifference
                    });
                }
            } catch (error) {
                console.error('Failed to perform health check for NFT Market subgraph', error);
            }
        };
        getSubgraphHealth();
    }, []);
    return sgHealth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSubgraphHealth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useUserAgent = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        document.documentElement.setAttribute('data-useragent', navigator.userAgent);
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserAgent);


/***/ }),

/***/ 88677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ Updaters),
/* harmony export */   "P": () => (/* binding */ Blocklist)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3862);
/* harmony import */ var _hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64011);
/* harmony import */ var _state_lists_updater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36681);
/* harmony import */ var _state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31710);
/* harmony import */ var _state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56573);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_lists_updater__WEBPACK_IMPORTED_MODULE_4__, _state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__, _state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__]);
([_state_lists_updater__WEBPACK_IMPORTED_MODULE_4__, _state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__, _state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Updaters() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_lists_updater__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_transactions_updater__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_state_multicall_updater__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {})
        ]
    }));
}
function Blocklist({ children  }) {
    const { account  } = (0,_hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const blocked = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>Boolean(account && _config_constants__WEBPACK_IMPORTED_MODULE_2__/* .BLOCKED_ADDRESSES.indexOf */ .mj.indexOf(account) !== -1)
    , [
        account
    ]);
    if (blocked) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Blocked address"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 12957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83916);
/* harmony import */ var _champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34215);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_EasterEgg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76301);
/* harmony import */ var components_GlobalCheckClaimStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57580);
/* harmony import */ var components_SubgraphHealthIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42606);
/* harmony import */ var contexts_ToastsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55083);
/* harmony import */ var hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32987);
/* harmony import */ var hooks_useInactiveListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63353);
/* harmony import */ var hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89667);
/* harmony import */ var hooks_useUserAgent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97604);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82727);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37063);
/* harmony import */ var state_farms_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8733);
/* harmony import */ var state_profile_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(89424);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88677);
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(83408);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32485);
/* harmony import */ var _components_BlockCountry__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5418);
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(13442);
/* harmony import */ var _style_Global__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(91055);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_SubgraphHealthIndicator__WEBPACK_IMPORTED_MODULE_6__, state_block_hooks__WEBPACK_IMPORTED_MODULE_16__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_17__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_18__, ___WEBPACK_IMPORTED_MODULE_19__, _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__, _components_Menu__WEBPACK_IMPORTED_MODULE_21__, _components_BlockCountry__WEBPACK_IMPORTED_MODULE_22__, _Providers__WEBPACK_IMPORTED_MODULE_23__]);
([components_SubgraphHealthIndicator__WEBPACK_IMPORTED_MODULE_6__, state_block_hooks__WEBPACK_IMPORTED_MODULE_16__, state_farms_hooks__WEBPACK_IMPORTED_MODULE_17__, state_profile_hooks__WEBPACK_IMPORTED_MODULE_18__, ___WEBPACK_IMPORTED_MODULE_19__, _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__, _components_Menu__WEBPACK_IMPORTED_MODULE_21__, _components_BlockCountry__WEBPACK_IMPORTED_MODULE_22__, _Providers__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























// This config is required for number formatting
bignumber_js__WEBPACK_IMPORTED_MODULE_3___default().config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80
});
function GlobalHooks() {
    (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_16__/* .usePollBlockNumber */ .hd)();
    (0,hooks_useEagerConnect__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    (0,state_profile_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useFetchProfile */ .Q5)();
    (0,state_farms_hooks__WEBPACK_IMPORTED_MODULE_17__/* .usePollCoreFarmData */ .QN)();
    (0,hooks_useUserAgent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    (0,hooks_useInactiveListener__WEBPACK_IMPORTED_MODULE_9__/* .useInactiveListener */ .f)();
    (0,hooks_useSentryUser__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
    return null;
}
function MyApp(props) {
    const { pageProps  } = props;
    const store = (0,state__WEBPACK_IMPORTED_MODULE_15__/* .useStore */ .oR)(pageProps.initialReduxState);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Cheaper and faster than Uniswap? Discover ChampagneSwap, the leading DEX on Binance Smart Chain (BSC) with the best farms in DeFi and a lottery for CHAM."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#1FC7D4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: "https://champagneswap.com/images/hero.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: "The most popular AMM on BSC! Earn CHAM through yield farming or win it in the Lottery, then stake it in Cristal Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ChampagneSwap), NFTs, and more, on a platform you can trust."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: "🥞 ChampagneSwap - A next evolution DeFi exchange on Binance Smart Chain (BSC)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "ChampagneSwap"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Providers__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                store: store,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_19__/* .Blocklist */ .P, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalHooks, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_19__/* .Updaters */ .y, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_champagneswap_uikit__WEBPACK_IMPORTED_MODULE_1__.ResetCSS, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_style_Global__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_GlobalCheckClaimStatus__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            excludeLocations: []
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_14__.PersistGate, {
                            loading: null,
                            persistor: state__WEBPACK_IMPORTED_MODULE_15__/* .persistor */ .Dj,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlockCountry__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                                    ...props
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                strategy: "afterInteractive",
                id: "google-tag",
                dangerouslySetInnerHTML: {
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${"GTM-TLF66T4"}');
          `
                }
            })
        ]
    }));
}
const ProductionErrorBoundary =  true ? _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z : 0;
const App = ({ Component , pageProps  })=>{
    // Use the layout defined at the page level, if available
    const Layout = Component.Layout || react__WEBPACK_IMPORTED_MODULE_13__.Fragment;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProductionErrorBoundary, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_EasterEgg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                iterations: 2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_ToastsContext__WEBPACK_IMPORTED_MODULE_7__/* .ToastListener */ .IG, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SubgraphHealthIndicator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var state_lists_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97952);
/* harmony import */ var _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51554);
/* harmony import */ var _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86435);
/* harmony import */ var config_constants_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90428);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64011);
/* harmony import */ var hooks_useFetchListCallback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58339);
/* harmony import */ var hooks_useInterval__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76159);
/* harmony import */ var hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94587);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48412);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__]);
hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function Updater() {
    const { library  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const isWindowVisible = (0,hooks_useIsWindowVisible__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    // get all loaded lists, and the active urls
    const lists = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAllLists */ .R0)();
    const activeListUrls = (0,state_lists_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useActiveListUrls */ .v0)();
    // initiate loading
    (0,hooks_Tokens__WEBPACK_IMPORTED_MODULE_4__/* .useAllInactiveTokens */ .EK)();
    const fetchList = (0,hooks_useFetchListCallback__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const fetchAllListsCallback = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (!isWindowVisible) return;
        Object.keys(lists).forEach((url)=>fetchList(url).catch((error)=>console.debug('interval list fetching error', error)
            )
        );
    }, [
        fetchList,
        isWindowVisible,
        lists
    ]);
    // fetch all lists every 10 minutes, but only after we initialize library
    (0,hooks_useInterval__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(fetchAllListsCallback, library ? 1000 * 60 * 10 : null);
    // whenever a list is not loaded and not loading, try again to load it
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        Object.keys(lists).forEach((listUrl)=>{
            const list = lists[listUrl];
            if (!list.current && !list.loadingRequestId && !list.error) {
                fetchList(listUrl).catch((error)=>console.debug('list added fetching error', error)
                );
            }
        });
    }, [
        dispatch,
        fetchList,
        library,
        lists
    ]);
    // if any lists from unsupported lists are loaded, check them too (in case new updates since last visit)
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        Object.keys(config_constants_lists__WEBPACK_IMPORTED_MODULE_5__/* .UNSUPPORTED_LIST_URLS */ .US).forEach((listUrl)=>{
            const list = lists[listUrl];
            if (!list || !list.current && !list.loadingRequestId && !list.error) {
                fetchList(listUrl).catch((error)=>console.debug('list added fetching error', error)
                );
            }
        });
    }, [
        dispatch,
        fetchList,
        library,
        lists
    ]);
    // automatically update lists if versions are minor/patch
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        Object.keys(lists).forEach((listUrl)=>{
            const list = lists[listUrl];
            if (list.current && list.pendingUpdate) {
                const bump = (0,_uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__.getVersionUpgrade)(list.current.version, list.pendingUpdate.version);
                // eslint-disable-next-line default-case
                switch(bump){
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__.VersionUpgrade.NONE:
                        throw new Error('unexpected no version bump');
                    // update any active or inactive lists
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__.VersionUpgrade.PATCH:
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__.VersionUpgrade.MINOR:
                    case _uniswap_token_lists__WEBPACK_IMPORTED_MODULE_1__.VersionUpgrade.MAJOR:
                        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_10__/* .acceptListUpdate */ .xJ)(listUrl));
                }
            }
        });
    }, [
        dispatch,
        lists,
        activeListUrls
    ]);
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ chunkArray)
/* harmony export */ });
// chunks array into chunks of maximum size
// evenly distributes items among the chunks
function chunkArray(items, maxChunkSize) {
    if (maxChunkSize < 1) throw new Error('maxChunkSize must be gte 1');
    if (items.length <= maxChunkSize) return [
        items
    ];
    const numChunks = Math.ceil(items.length / maxChunkSize);
    const chunkSize = Math.ceil(items.length / numChunks);
    return [
        ...Array(numChunks).keys()
    ].map((ix)=>items.slice(ix * chunkSize, ix * chunkSize + chunkSize)
    );
};


/***/ }),

/***/ 9228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p8": () => (/* binding */ CancelledError),
/* harmony export */   "s1": () => (/* binding */ RetryableError),
/* harmony export */   "XD": () => (/* binding */ retry)
/* harmony export */ });
/* eslint-disable */ function wait(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
}
function waitRandom(min, max) {
    return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}
/**
 * This error is thrown if the function is cancelled before completing
 */ class CancelledError extends Error {
    constructor(){
        super('Cancelled');
    }
}
/**
 * Throw this error if the function should retry
 */ class RetryableError extends Error {
}
/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */ function retry(fn, { n , minWait , maxWait  }) {
    let completed = false;
    let rejectCancelled;
    const promise = new Promise(async (resolve, reject)=>{
        rejectCancelled = reject;
        while(true){
            let result;
            try {
                result = await fn();
                if (!completed) {
                    resolve(result);
                    completed = true;
                }
                break;
            } catch (error) {
                console.error(error);
                if (completed) {
                    break;
                }
                if (n <= 0 || !(error instanceof RetryableError)) {
                    reject(error);
                    completed = true;
                    break;
                }
                n--;
            }
            await waitRandom(minWait, maxWait);
        }
    });
    return {
        promise,
        cancel: ()=>{
            if (completed) return;
            completed = true;
            rejectCancelled(new CancelledError());
        }
    };
} /* eslint-enable */ 


/***/ }),

/***/ 31710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Updater)
/* harmony export */ });
/* unused harmony exports activeListeningKeys, outdatedListeningKeys */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37063);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64011);
/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54626);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55999);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9228);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3884);
/* harmony import */ var _chunkArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_block_hooks__WEBPACK_IMPORTED_MODULE_2__]);
state_block_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// chunk calls so we do not exceed the gas limit
const CALL_CHUNK_SIZE = 500;
/**
 * Fetches a chunk of calls, enforcing a minimum block number constraint
 * @param multicallContract multicall contract to fetch against
 * @param chunk chunk of calls to make
 * @param minBlockNumber minimum block number of the result set
 */ async function fetchChunk(multicallContract, chunk, minBlockNumber) {
    console.debug('Fetching chunk', multicallContract, chunk, minBlockNumber);
    let resultsBlockNumber;
    let returnData;
    try {
        // prettier-ignore
        [resultsBlockNumber, returnData] = await multicallContract.aggregate(chunk.map((obj)=>[
                obj.address,
                obj.callData
            ]
        ), {
            blockTag: minBlockNumber
        });
    } catch (err) {
        var ref, ref1, ref2, ref3, ref4;
        const error = err;
        if (error.code === -32000 || (error === null || error === void 0 ? void 0 : (ref = error.data) === null || ref === void 0 ? void 0 : ref.message) && (error === null || error === void 0 ? void 0 : (ref1 = error.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.message) === null || ref2 === void 0 ? void 0 : ref2.indexOf('header not found')) !== -1 || ((ref3 = error.message) === null || ref3 === void 0 ? void 0 : ref3.indexOf('header not found')) !== -1) {
            throw new _retry__WEBPACK_IMPORTED_MODULE_6__/* .RetryableError */ .s1(`header not found for block number ${minBlockNumber}`);
        } else if (error.code === -32603 || ((ref4 = error.message) === null || ref4 === void 0 ? void 0 : ref4.indexOf('execution ran out of gas')) !== -1) {
            if (chunk.length > 1) {
                if (false) {}
                const half = Math.floor(chunk.length / 2);
                const [c0, c1] = await Promise.all([
                    fetchChunk(multicallContract, chunk.slice(0, half), minBlockNumber),
                    fetchChunk(multicallContract, chunk.slice(half, chunk.length), minBlockNumber), 
                ]);
                return {
                    results: c0.results.concat(c1.results),
                    blockNumber: c1.blockNumber
                };
            }
        }
        console.debug('Failed to fetch chunk inside retry', error);
        throw error;
    }
    if (resultsBlockNumber.toNumber() < minBlockNumber) {
        console.debug(`Fetched results for old block number: ${resultsBlockNumber.toString()} vs. ${minBlockNumber}`);
    }
    return {
        results: returnData,
        blockNumber: resultsBlockNumber.toNumber()
    };
}
/**
 * From the current all listeners state, return each call key mapped to the
 * minimum number of blocks per fetch. This is how often each key must be fetched.
 * @param allListeners the all listeners state
 * @param chainId the current chain id
 */ function activeListeningKeys(allListeners, chainId) {
    if (!allListeners || !chainId) return {};
    const listeners = allListeners[chainId];
    if (!listeners) return {};
    return Object.keys(listeners).reduce((memo, callKey)=>{
        const keyListeners = listeners[callKey];
        memo[callKey] = Object.keys(keyListeners).filter((key)=>{
            const blocksPerFetch = parseInt(key);
            if (blocksPerFetch <= 0) return false;
            return keyListeners[blocksPerFetch] > 0;
        }).reduce((previousMin, current)=>{
            return Math.min(previousMin, parseInt(current));
        }, Infinity);
        return memo;
    }, {});
}
/**
 * Return the keys that need to be refetched
 * @param callResults current call result state
 * @param listeningKeys each call key mapped to how old the data can be in blocks
 * @param chainId the current chain id
 * @param currentBlock the latest block number
 */ function outdatedListeningKeys(callResults, listeningKeys, chainId, currentBlock) {
    if (!chainId || !currentBlock) return [];
    const results = callResults[chainId];
    // no results at all, load everything
    if (!results) return Object.keys(listeningKeys);
    return Object.keys(listeningKeys).filter((callKey)=>{
        const blocksPerFetch = listeningKeys[callKey];
        const data = callResults[chainId][callKey];
        // no data, must fetch
        if (!data) return true;
        const minDataBlockNumber = currentBlock - (blocksPerFetch - 1);
        // already fetching it for a recent enough block, don't refetch it
        if (data.fetchingBlockNumber && data.fetchingBlockNumber >= minDataBlockNumber) return false;
        // if data is older than minDataBlockNumber, fetch it
        return !data.blockNumber || data.blockNumber < minDataBlockNumber;
    });
}
function Updater() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((s)=>s.multicall
    );
    // wait for listeners to settle before triggering updates
    const debouncedListeners = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(state.callListeners, 100);
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentBlock */ .je)();
    const { chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const multicallContract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_4__/* .useMulticallContract */ .gq)();
    const cancellations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const listeningKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return activeListeningKeys(debouncedListeners, chainId);
    }, [
        debouncedListeners,
        chainId
    ]);
    const unserializedOutdatedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return outdatedListeningKeys(state.callResults, listeningKeys, chainId, currentBlock);
    }, [
        chainId,
        state.callResults,
        listeningKeys,
        currentBlock
    ]);
    const serializedOutdatedCallKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>JSON.stringify(unserializedOutdatedCallKeys.sort())
    , [
        unserializedOutdatedCallKeys
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var ref;
        if (!currentBlock || !chainId || !multicallContract) return;
        const outdatedCallKeys = JSON.parse(serializedOutdatedCallKeys);
        if (outdatedCallKeys.length === 0) return;
        const calls = outdatedCallKeys.map((key)=>(0,_actions__WEBPACK_IMPORTED_MODULE_7__/* .parseCallKey */ .gl)(key)
        );
        const chunkedCalls = (0,_chunkArray__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(calls, CALL_CHUNK_SIZE);
        if (((ref = cancellations.current) === null || ref === void 0 ? void 0 : ref.blockNumber) !== currentBlock) {
            var ref5, ref6;
            (ref5 = cancellations.current) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.cancellations) === null || ref6 === void 0 ? void 0 : ref6.forEach((c)=>c()
            );
        }
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_7__/* .fetchingMulticallResults */ .nu)({
            calls,
            chainId,
            fetchingBlockNumber: currentBlock
        }));
        cancellations.current = {
            blockNumber: currentBlock,
            cancellations: chunkedCalls.map((chunk, index)=>{
                const { cancel , promise  } = (0,_retry__WEBPACK_IMPORTED_MODULE_6__/* .retry */ .XD)(()=>fetchChunk(multicallContract, chunk, currentBlock)
                , {
                    n: Infinity,
                    minWait: 2500,
                    maxWait: 3500
                });
                promise.then(({ results: returnData , blockNumber: fetchBlockNumber  })=>{
                    cancellations.current = {
                        cancellations: [],
                        blockNumber: currentBlock
                    };
                    // accumulates the length of all previous indices
                    const firstCallKeyIndex = chunkedCalls.slice(0, index).reduce((memo, curr)=>memo + curr.length
                    , 0);
                    const lastCallKeyIndex = firstCallKeyIndex + returnData.length;
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_7__/* .updateMulticallResults */ .zT)({
                        chainId,
                        results: outdatedCallKeys.slice(firstCallKeyIndex, lastCallKeyIndex).reduce((memo, callKey, i)=>{
                            var _i;
                            memo[callKey] = (_i = returnData[i]) !== null && _i !== void 0 ? _i : null;
                            return memo;
                        }, {}),
                        blockNumber: fetchBlockNumber
                    }));
                }).catch((error)=>{
                    if (error instanceof _retry__WEBPACK_IMPORTED_MODULE_6__/* .CancelledError */ .p8) {
                        console.debug('Cancelled fetch for blockNumber', currentBlock);
                        return;
                    }
                    console.error('Failed to fetch multicall chunk', chunk, chainId, error);
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_7__/* .errorFetchingMulticallResults */ .wC)({
                        calls: chunk,
                        chainId,
                        fetchingBlockNumber: currentBlock
                    }));
                });
                return cancel;
            })
        };
    }, [
        chainId,
        multicallContract,
        dispatch,
        serializedOutdatedCallKeys,
        currentBlock
    ]);
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Updater)
/* harmony export */ });
/* unused harmony export shouldCheck */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_Localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99150);
/* harmony import */ var hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64011);
/* harmony import */ var state_block_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37063);
/* harmony import */ var components_Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63937);
/* harmony import */ var hooks_useToast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(789);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([state_block_hooks__WEBPACK_IMPORTED_MODULE_5__]);
state_block_hooks__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function shouldCheck(currentBlock, tx) {
    if (tx.receipt) return false;
    if (!tx.lastCheckedBlockNumber) return true;
    const blocksSinceCheck = currentBlock - tx.lastCheckedBlockNumber;
    if (blocksSinceCheck < 1) return false;
    const minutesPending = (new Date().getTime() - tx.addedTime) / 1000 / 60;
    if (minutesPending > 60) {
        // every 10 blocks if pending for longer than an hour
        return blocksSinceCheck > 9;
    }
    if (minutesPending > 5) {
        // every 3 blocks if pending more than 5 minutes
        return blocksSinceCheck > 2;
    }
    // otherwise every block
    return true;
}
function Updater() {
    const { library , chainId  } = (0,hooks_useActiveWeb3React__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { t  } = (0,contexts_Localization__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const currentBlock = (0,state_block_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentBlock */ .je)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((s)=>s.transactions
    );
    var _chainId;
    const transactions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>chainId ? (_chainId = state[chainId]) !== null && _chainId !== void 0 ? _chainId : {} : {}
    , [
        chainId,
        state
    ]);
    const { toastError , toastSuccess  } = (0,hooks_useToast__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainId || !library || !currentBlock) return;
        Object.keys(transactions).filter((hash)=>shouldCheck(currentBlock, transactions[hash])
        ).forEach((hash)=>{
            library.getTransactionReceipt(hash).then((receipt)=>{
                if (receipt) {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .finalizeTransaction */ .Aw)({
                        chainId,
                        hash,
                        receipt: {
                            blockHash: receipt.blockHash,
                            blockNumber: receipt.blockNumber,
                            contractAddress: receipt.contractAddress,
                            from: receipt.from,
                            status: receipt.status,
                            to: receipt.to,
                            transactionHash: receipt.transactionHash,
                            transactionIndex: receipt.transactionIndex
                        }
                    }));
                    const toast = receipt.status === 1 ? toastSuccess : toastError;
                    toast(t('Transaction receipt'), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Toast__WEBPACK_IMPORTED_MODULE_6__/* .ToastDescriptionWithTx */ .YO, {
                        txHash: receipt.transactionHash
                    }));
                } else {
                    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_8__/* .checkedTransaction */ .LN)({
                        chainId,
                        hash,
                        blockNumber: currentBlock
                    }));
                }
            }).catch((error)=>{
                console.error(`failed to check transaction hash: ${hash}`, error);
            });
        });
    }, [
        chainId,
        library,
        transactions,
        currentBlock,
        dispatch,
        toastSuccess,
        toastError,
        t
    ]);
    return null;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 91055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme  })=>theme.colors.background
};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyle);


/***/ }),

/***/ 68454:
/***/ ((module) => {

"use strict";
module.exports = require("@binance-chain/bsc-connector");

/***/ }),

/***/ 6929:
/***/ ((module) => {

"use strict";
module.exports = require("@champagneswap/sdk");

/***/ }),

/***/ 83916:
/***/ ((module) => {

"use strict";
module.exports = require("@champagneswap/uikit");

/***/ }),

/***/ 6187:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 51541:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/address");

/***/ }),

/***/ 65757:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 49935:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 26644:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 40750:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/hash");

/***/ }),

/***/ 90399:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 49213:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/strings");

/***/ }),

/***/ 93138:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/units");

/***/ }),

/***/ 75184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 58097:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ 15427:
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/react");

/***/ }),

/***/ 51554:
/***/ ((module) => {

"use strict";
module.exports = require("@uniswap/token-lists");

/***/ }),

/***/ 18054:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ 76590:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 9795:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 75888:
/***/ ((module) => {

"use strict";
module.exports = require("ajv");

/***/ }),

/***/ 34215:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js");

/***/ }),

/***/ 10899:
/***/ ((module) => {

"use strict";
module.exports = require("bignumber.js/bignumber");

/***/ }),

/***/ 18729:
/***/ ((module) => {

"use strict";
module.exports = require("cids");

/***/ }),

/***/ 74146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 64175:
/***/ ((module) => {

"use strict";
module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 5805:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ 90221:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/chunk");

/***/ }),

/***/ 38190:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatMap");

/***/ }),

/***/ 1712:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ 89699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 51546:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/kebabCase");

/***/ }),

/***/ 11341:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/maxBy");

/***/ }),

/***/ 61831:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ 49949:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/orderBy");

/***/ }),

/***/ 64042:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/range");

/***/ }),

/***/ 47657:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sample");

/***/ }),

/***/ 4354:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/times");

/***/ }),

/***/ 18459:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniq");

/***/ }),

/***/ 16677:
/***/ ((module) => {

"use strict";
module.exports = require("multicodec");

/***/ }),

/***/ 63735:
/***/ ((module) => {

"use strict";
module.exports = require("multihashes");

/***/ }),

/***/ 60562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 64365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 59819:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 84466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 14161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 61127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 98936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 57518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

"use strict";
module.exports = import("swr/immutable");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,5152,1940,1154,9099,9770,8605,3629,1790,621,9424,8472,1621,4854,4319,8733,8118,8339], () => (__webpack_exec__(94131), __webpack_exec__(55561), __webpack_exec__(12957)));
module.exports = __webpack_exports__;

})();