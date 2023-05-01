import { Component, h, Prop } from "@stencil/core";


@Component({
    tag: "pulumi-search-header",
    styleUrl: "pulumi-search-header.scss",
    shadow: false,
})
export class PulumiSearchHeader {
    
    @Prop()
    mode: string;

    render() {
        return (
            <div class="search-container">
                <div class="search-header container flex">
                    <div class="header-pinned-container hidden md:flex xl:w-3/12 px-4 lg:px-8 xl:px-5">
                        <div class="flex">
                            <div class="flex tabs">
                                <a class="tab-selected">
                                    <i class="fas fa-book-open tab-icon"></i>
                                    Docs
                                </a>
                                <a class="tab" href="/registry">
                                    <i class="fas fa-archive tab-icon"></i>
                                    Registry
                                </a>
                                {/* <a href="">
                                    <span class="title-text-content">{this.mode === "docs" ? "Pulumi Docs" : "Pulumi Registry"}</span>
                                </a> */}
                            </div>
                        </div>
                        <div class="header-pinned items-center transition-all hidden">
                            <img class="h-6 mr-12" src="/images/logo/logo-on-white.svg" alt="Pulumi logo" />
                            <div class="get-started-pinned-search-container">
                                <a class="get-started-pinned-search-button" data-track="get-started-pinned-search" href="">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div id="search-container" class="search-container bg-white mt-4 md:mt-0 flex justify-center lg:ml-6 py-2">
                        <div id="search-form" class="search-widget text-gray-600 focus-within:text-gray-700">
                            <form class="relative flex">
                                <i class="fas fa-search absolute inset-y-0 flex items-center pl-3"></i>
                                <input id="search-query" type="text" class="st-default-search-input docs text-sm transition" placeholder="Search..." />
                                <button type="submit" class="hidden md:block bg-blue-600 font-display font-normal text-lg text-white p-1.5 px-4 rounded-r">Search</button>
                            </form>
                            <div id="search-results" class="relative"></div>
                        </div>
                    </div>
                    <div class="feedback">
                        <div class="header-hero-title pr-3">
                            <div class="flex items-center tabs">
                                <a class="tab">
                                    <i class="fas fa-comment tab-icon"></i>
                                    Feedback
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
