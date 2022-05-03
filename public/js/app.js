var NavComponent = {
  template: `<div class="navbar bg-base-100 sticky top-0 z-40">
  <div class="navbar-start">
  <div class="dropdown">
  <label tabindex="0" class="btn btn-ghost btn-circle">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  >
  <path
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  d="M4 6h16M4 12h16M4 18h7"
  />
  </svg>
  </label>
  <ul
  tabindex="0"
  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
  >
  <li><a href="index.html">Home</a></li>
  <li><a href="brand.html">Brand</a></li>
  <li><a href="collection.html">Collection</a></li>
  </ul>
  </div>
  </div>
  <div class="navbar-center">
  <a class="btn btn-ghost normal-case text-xl">FootWear</a>
  </div>
  <div class="navbar-end">
  </div>
  </div>`,
};
var FooComponent = {
  template: `<div>
  <p>Copyright © 2022 - All right reserved by FootWear Tedc Ltd</p>
  </div>`,
};

var CardComponent = {
  props: ["card"],
  template: `
  <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-white-700">
  <a href="#">
  <img class="p-8 rounded-t-lg"  :src="'img/product/' + card.image">
  </a>
  <div class="px-5 pb-5">
  <a href="#">
  <h5 class="text-xl font-semibold tracking-tight text-black ">{{ card.name }}</h5>
  </a>
  <div class="flex items-center mt-2.5 mb-5">
  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
  </div>
  <div class="flex justify-between items-center">
  <span class="text-xl font-bold text-black ">Rp.{{ card.price }} </span>
  <a href="#my-modal-2" @click="$emit('selected', card.name +  card.price)"  class="btn btn-primary ">Shop Now</a>
  </div>
  </div>
  </div>
  `,
};

var BrandComponent = {
  props: ["brand"],
  template: `
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" :src="'img/bran/' + brand.image" alt="">
            </a>
            <div class="p-6">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{{ brand.name }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ brand.description }}</p>
            </div>
        </div>
  `,
};

new Vue({
  el: "#app",
  components: {
    navbar: NavComponent,
    foo: FooComponent,
    card: CardComponent,
    brand: BrandComponent,
  },
  data: {
    selectedCard: "",
    selectedPrice: "",
    search: "",
    cards: [
      {
        id: 1,
        name: "Hoka Mach Supersonic Men's Running Shoes - Radiant Yellow",
        price: "2.499.000",
        image: "1.png",
      },
      {
        id: 2,
        name: "ADIDAS GRAND COURT SE Men's Sneakers Shoes - White",
        price: "1.100.000",
        image: "6.png",
      },
      {
        id: 3,
        name: "Crocs Unisex Classic Trans Solarized Clog - White/Multi",
        price: "1.199.000",
        image: "5.png",
      },
      {
        id: 4,
        name: "Reebok Nano X2 Women's Fitness Shoes - Black",
        price: "1.199.000",
        image: "2.png",
      },
      {
        id: 5,
        name: "Nike Air Max Infinity 2 Men's Sneakers Shoes - Black",
        price: "1.286.100",
        image: "3.png",
      },
      {
        id: 6,
        name: "Hoka SPEEDGOAT 4 Women's Shoes - DAZZLING BLUE / PHLOX PINK",
        price: "1.539.300",
        image: "4.png",
      },
    ],
    brands: [
      {
        id: 1,
        name: "Adidas",
        description:
          "Adidas AG, juga dikenal sebagai adidas, adalah sebuah perusahaan sepatu Jerman. Perusahaan ini dinamakan atas pendirinya, Adolf Dassler, yang mulai memproduksi sepatu pada 1920-an di Herzogenaurach dekat Nuremberg.",
        image: "adidas.png",
      },
      {
        id: 2,
        name: "Hoka",
        description:
          "Adidas AG, juga dikenal sebagai adidas, adalah sebuah perusahaan sepatu Jerman. Perusahaan ini dinamakan atas pendirinya, Adolf Dassler, yang mulai memproduksi sepatu pada 1920-an di Herzogenaurach dekat Nuremberg.",
        image: "hoka.png",
      },
      {
        id: 3,
        name: "Crocs",
        description:
          "Crocs adalah produsen sepatu karet yang berasal dari Colorado Amerika Serikat yang dipasarkan pertama kali tahun 2002. Pada mulanya Crocs didesain untuk kegiatan outdoor dan berlayar.",
        image: "adidas.png",
      },
      {
        id: 4,
        name: "Nike",
        description:
          "Nike, Inc. adalah salah satu perusahaan sepatu, pakaian dan alat-alat olahraga Amerika Serikat yang merupakan salah satu yang terbesar di dunia.",
        image: "nike.png",
      },
    ],
  },
  // computed: {
  // filterCards: function () {
  //   return this.cards.filter((card) => {
  //     return card.name.match(this.search);
  //   });
  // },
  computed: {
    filterCards: function () {
      if (this.search.trim() === "") {
        return this.cards;
      } else {
        return this.cards.filter((card) => {
          return (
            card.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
          );
        });
      }
    },
  },
  // },
});
  