<template>
  <div id="app" class="app-container">
    <div class="app-container__elements">
      <app-header class="app-container__elements__header"/>
      <app-groups-navigation v-show="toShowGroupsNavigation" class="app-container__elements__app-groups-navigation"/>
      <div class="app-container__elements__body">
        <app-groups-list class="app-container__elements__body__groups-list" @open-modal="openAddGroupModal = true"></app-groups-list>
        <app-tasks-list class="app-container__elements__body__tasks-list"></app-tasks-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/AppHeader.vue'
import AppGroupsList from '@/components/AppGroupsList.vue'
import AppTasksList from '@/components/AppTasksList.vue'
import appGroupsNavigation from '@/components/appGroupsNavigation.vue'

export default {
  name: 'App',
  components: {
    AppHeader, AppTasksList, AppGroupsList, appGroupsNavigation
  },
  computed: {
    ...mapState({
      toShowGroupsNavigation: state => state.toShowGroupsNavigation
    })
  }
}
</script>

<style lang="scss">
.app-container {
  &__elements {
    @include flex-column;

    &__header {
      margin-bottom: 1%;
    }

    &__app-groups-navigation {
      margin-bottom: 1%;
    }

    &__body {
      @include flex-row;

      &__groups-list {
        flex: 15%;
      }

      &__tasks-list {
        flex: 85%;
      }
    }
  }
}

@media only screen and (max-width: $tablet) {
  .app-container {
    &__elements__body__groups-list {
      display: none !important
    }
  }
}

@media not all and (max-width: $tablet) {
  .app-container {
    &__elements__app-groups-navigation {
      display: none !important
    }
  }
}
</style>
