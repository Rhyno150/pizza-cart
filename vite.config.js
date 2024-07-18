
import pizzas from "./pizzas.json" assert {type:'json'};
import handlebars from 'vite-plugin-handlebars';

export default {
  base : '/responsive_webpages/',  
  plugins: [handlebars({

        context : {
          pizzas  
      }
    })],
    }