import { housesData } from "./data.js";

// 1. COMPONENTE: Retorna a estrutura do Card
function CardComponent(house) {
  return `
    <article class="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl hover:border-slate-200/40 transition duration-300">
      <div class="relative overflow-hidden aspect-[4/3]">
        <div class="absolute z-20 top-4 left-4">
          <div class="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
            <i class="fa fa-map-marker text-rose-500" style="font-size:12px"></i>
            <span class="font-semibold text-xs text-slate-800">${house.location}</span>
          </div>
        </div>
        <img src="${house.img}" alt="${house.title}" class="w-full h-full object-cover group-hover:scale-105 duration-500" />
      </div>

      <div class="p-5 flex flex-col flex-1">
        <div class="mb-4">
          <h2 class="text-lg font-bold text-slate-900 group-hover:text-rose-500 transition duration-200">${house.title}</h2>
          <p class="text-xs text-slate-400 mt-0.5">${house.description}</p>
        </div>
        
        <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span class="text-xs text-slate-400 line-through block">R$ ${house.oldPrice}</span>
            <span class="text-xl font-bold text-slate-900">R$ ${house.price} <span class="text-xs font-normal text-slate-500">/mês</span></span>
          </div>
          
          <div class="flex items-center gap-3 text-slate-500 text-xs font-medium">
            <span class="flex items-center gap-1"><i class="fa fa-arrows-alt text-slate-400"></i> ${house.area}m²</span>
            <span class="flex items-center gap-1"><i class="fa fa-bed text-slate-400"></i> ${house.rooms} Qts</span>
            <span class="flex items-center gap-1"><i class="fa fa-tint text-slate-400"></i> ${house.bathrooms} Banh.</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

// 2. MOTOR DE RENDERIZAÇÃO
function renderApp() {
  const grid = document.getElementById("properties-grid");
  const counter = document.getElementById("properties-count");

  if (grid && counter) {
    grid.innerHTML = housesData.map((house) => CardComponent(house)).join("");
    counter.innerText = `${housesData.length} imóveis encontrados`;
  }
}

// 3. INICIALIZAÇÃO AUTOMÁTICA (Sem listeners conflitantes)
renderApp();
