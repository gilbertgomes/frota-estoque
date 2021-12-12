<template>
  <v-card
    max-width="100%"
  >    
    <v-system-bar color="cyan darken-1"></v-system-bar>

    <v-app-bar
      color="cyan accent-4"
      dark
      prominent
      height="70"
      max-width="100%"
    >
      <v-app-bar-nav-icon elevation="9" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Frota Estoque</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      floating
      width="260"
      class="app-navigation-menu"
      :right="$vuetify.rtl"
      @input="val => $emit('update:is-drawer-open', val)"
      color="#cfd8dc"
      
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img  :src="require('@/assets/logo12.png')"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Empresa</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list 
 
        expand
        shaped
        dark
        absolute
        class="vertical-nav-menu-items pr-5"
        color="cyan"
        nav
        outlined
        

      >       
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link 
       >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title ></v-list-item-title> 
            <v-btn rounded color="#0095a8" @click="acessabotao(item.bottom)">
              {{ item.title }}
            </v-btn>        
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        { bottom: '1', title: 'Cadastros', icon: 'mdi-file-document-multiple-outline' },
        { bottom: '2', title: 'Entradas', icon: 'mdi-arrow-expand-right' },
        { bottom: '3', title: 'Saidas', icon: 'mdi-arrow-expand-left' },
        { bottom: '4', title: 'Saldo', icon: 'mdi-chart-box-plus-outline' },
        { bottom: '5', title: 'OC', icon: 'mdi-file-video-outline' },
        { bottom: '6', title: 'Estatistica', icon: 'mdi-chart-bar' },
        { bottom: '7', title: 'Relatório', icon: 'mdi-printer' },
        { bottom: '8', title: 'Sair/Fechar', icon: 'mdi-door-open' },
      ],
    }),
    methods: {
         acessabotao(botao) {
            if (botao == '1') {
                this.$router.push("/cadastro");
            } else if (botao == '2') {
                this.$router.push("/entrada")
            } else if (botao == '3') {
                this.$router.push("/saida")
            } else if (botao == '4') {
                this.$router.push("/saldo")
            } else if (botao == '5') {
                this.$router.push("/oc")
            } else if (botao == '8') {
                this.$router.push("/login")
            }
        },
    },
    watch: {
      group () {
        this.drawer = true
      },
    },
  }
</script>
<style scoped>
@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}
</style>