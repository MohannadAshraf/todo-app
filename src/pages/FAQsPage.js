import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle('FAQs');
    }

    async getHtml() {
        return `
        <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div class="space-y-3 text-center">
                <h1 class="text-3xl text-gray-100 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p class="text-gray-300 max-w-lg mx-auto text-base">
                Can’t find the answer you’re looking for? Reach out to our customer <a href="/support" data-link class="text-indigo-600">support</a> team.</p>
            </div>
            <div class="mt-14 max-w-2xl mx-auto">
            <div class="space-y-4 divide-y divide-gray-700">
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
          
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
              </p>
            </details>
          
            <details
              class="group p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-100"
              >
                <h2 class="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>
          
                <span class="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
          
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
          
              <p class="mt-4 leading-relaxed text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
              </p>
            </details>
          </div>
            </div>
        `;
    }

    async getJs() {
        console.log('FAQs');
    }
}