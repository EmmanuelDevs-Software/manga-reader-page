'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-tailwind documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-366897abb0732acebc0f41b2fd4e3760e95d98a38280721e756f4a03eec57ecb06c9e4253d0144b98fcd3167cbbee1a7d91a31c8fd0bb2aa19cc35d2220dee3d"' : 'data-target="#xs-components-links-module-AppModule-366897abb0732acebc0f41b2fd4e3760e95d98a38280721e756f4a03eec57ecb06c9e4253d0144b98fcd3167cbbee1a7d91a31c8fd0bb2aa19cc35d2220dee3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-366897abb0732acebc0f41b2fd4e3760e95d98a38280721e756f4a03eec57ecb06c9e4253d0144b98fcd3167cbbee1a7d91a31c8fd0bb2aa19cc35d2220dee3d"' :
                                            'id="xs-components-links-module-AppModule-366897abb0732acebc0f41b2fd4e3760e95d98a38280721e756f4a03eec57ecb06c9e4253d0144b98fcd3167cbbee1a7d91a31c8fd0bb2aa19cc35d2220dee3d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChaptersModule.html" data-type="entity-link" >ChaptersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChaptersModule-8cd3b008bbe61c2dd28235fc1ac8e3a8a0298edee1e7e55239046f4ea43fc0c8a0295c48c8a29ef2dff98090d9c95065abe46306adc7a50d6c6b64fecf0801fa"' : 'data-target="#xs-components-links-module-ChaptersModule-8cd3b008bbe61c2dd28235fc1ac8e3a8a0298edee1e7e55239046f4ea43fc0c8a0295c48c8a29ef2dff98090d9c95065abe46306adc7a50d6c6b64fecf0801fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChaptersModule-8cd3b008bbe61c2dd28235fc1ac8e3a8a0298edee1e7e55239046f4ea43fc0c8a0295c48c8a29ef2dff98090d9c95065abe46306adc7a50d6c6b64fecf0801fa"' :
                                            'id="xs-components-links-module-ChaptersModule-8cd3b008bbe61c2dd28235fc1ac8e3a8a0298edee1e7e55239046f4ea43fc0c8a0295c48c8a29ef2dff98090d9c95065abe46306adc7a50d6c6b64fecf0801fa"' }>
                                            <li class="link">
                                                <a href="components/ChaptersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChaptersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReadMangaModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadMangaModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChaptersRoutingModule.html" data-type="entity-link" >ChaptersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-e92967e8895da3e9a89a22ae28b8017f1202bce69b9a4dc4da9f7f320b80b3531757f90eca2383a0964fad0b96f3155e5b90d0372eb0a113223d58be8618eb1d"' : 'data-target="#xs-components-links-module-ComponentsModule-e92967e8895da3e9a89a22ae28b8017f1202bce69b9a4dc4da9f7f320b80b3531757f90eca2383a0964fad0b96f3155e5b90d0372eb0a113223d58be8618eb1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-e92967e8895da3e9a89a22ae28b8017f1202bce69b9a4dc4da9f7f320b80b3531757f90eca2383a0964fad0b96f3155e5b90d0372eb0a113223d58be8618eb1d"' :
                                            'id="xs-components-links-module-ComponentsModule-e92967e8895da3e9a89a22ae28b8017f1202bce69b9a4dc4da9f7f320b80b3531757f90eca2383a0964fad0b96f3155e5b90d0372eb0a113223d58be8618eb1d"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-65648560d579fd4d1f78f8bb55a50a852855c495973eb8378fc8d810d532fb444f37f2f9eb92fc16b9fa6ac342d102a1dc696b1ea75f509aebd6a3638601785d"' : 'data-target="#xs-components-links-module-HomeModule-65648560d579fd4d1f78f8bb55a50a852855c495973eb8378fc8d810d532fb444f37f2f9eb92fc16b9fa6ac342d102a1dc696b1ea75f509aebd6a3638601785d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-65648560d579fd4d1f78f8bb55a50a852855c495973eb8378fc8d810d532fb444f37f2f9eb92fc16b9fa6ac342d102a1dc696b1ea75f509aebd6a3638601785d"' :
                                            'id="xs-components-links-module-HomeModule-65648560d579fd4d1f78f8bb55a50a852855c495973eb8378fc8d810d532fb444f37f2f9eb92fc16b9fa6ac342d102a1dc696b1ea75f509aebd6a3638601785d"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProvidersCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvidersCardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MangaByProviderModule.html" data-type="entity-link" >MangaByProviderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MangaByProviderModule-537e2d1566a508dee5dabe4b97fffb46f8f7b6b036ef85d814465462bc2e1b3028d2b09872769f551a5fb590c75a8d69507a855bb865a2bffda2d66f5f9309fd"' : 'data-target="#xs-components-links-module-MangaByProviderModule-537e2d1566a508dee5dabe4b97fffb46f8f7b6b036ef85d814465462bc2e1b3028d2b09872769f551a5fb590c75a8d69507a855bb865a2bffda2d66f5f9309fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MangaByProviderModule-537e2d1566a508dee5dabe4b97fffb46f8f7b6b036ef85d814465462bc2e1b3028d2b09872769f551a5fb590c75a8d69507a855bb865a2bffda2d66f5f9309fd"' :
                                            'id="xs-components-links-module-MangaByProviderModule-537e2d1566a508dee5dabe4b97fffb46f8f7b6b036ef85d814465462bc2e1b3028d2b09872769f551a5fb590c75a8d69507a855bb865a2bffda2d66f5f9309fd"' }>
                                            <li class="link">
                                                <a href="components/MangaByProviderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MangaByProviderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MangaByProviderRoutingModule.html" data-type="entity-link" >MangaByProviderRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/InitialLoadingService.html" data-type="entity-link" >InitialLoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MangaApiService.html" data-type="entity-link" >MangaApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChaptersInterface.html" data-type="entity-link" >ChaptersInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MangaByProviderInterface.html" data-type="entity-link" >MangaByProviderInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProvidersInterface.html" data-type="entity-link" >ProvidersInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});