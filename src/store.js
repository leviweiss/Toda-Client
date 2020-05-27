import Vue from 'vue'
import Vuex from 'vuex'
import isNil from 'lodash/isNil'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groupsInfo: [
      {
        id: 1,
        name: 'Frontend',
        tasks: [
          {
            id: 1,
            name: 'Vue',
            value: 7
          },
          {
            id: 2,
            name: 'React',
            value: 1
          },
          {
            id: 3,
            name: 'VDOM',
            value: 8
          },
          {
            id: 4,
            name: 'Angular',
            value: 2
          },
          {
            id: 5,
            name: 'Webpack',
            value: 5
          }
        ]
      },
      {
        id: 2,
        name: 'Workout',
        tasks: [
          {
            id: 1,
            name: 'Abs',
            value: 4
          },
          {
            id: 2,
            name: 'Running',
            value: 5
          },
          {
            id: 3,
            name: 'Tennis',
            value: 7
          },
          {
            id: 4,
            name: 'Gym',
            value: 5
          }
        ]
      },
      {
        id: 3,
        name: 'Workout',
        tasks: [
          {
            id: 1,
            name: 'Abs',
            value: 4
          },
          {
            id: 2,
            name: 'Running',
            value: 5
          },
          {
            id: 3,
            name: 'Tennis',
            value: 7
          },
          {
            id: 4,
            name: 'Gym',
            value: 5
          }
        ]
      },
      {
        id: 4,
        name: 'Workout',
        tasks: [
          {
            id: 1,
            name: 'Abs',
            value: 4
          },
          {
            id: 2,
            name: 'Running',
            value: 5
          },
          {
            id: 3,
            name: 'Tennis',
            value: 7
          },
          {
            id: 4,
            name: 'Gym',
            value: 5
          }
        ]
      },
      {
        id: 5,
        name: 'Workout',
        tasks: [
          {
            id: 1,
            name: 'Abs',
            value: 4
          },
          {
            id: 2,
            name: 'Running',
            value: 5
          },
          {
            id: 3,
            name: 'Tennis',
            value: 7
          },
          {
            id: 4,
            name: 'Gym',
            value: 5
          }
        ]
      }
    ],
    chosenGroupId: 1,
    NUMBER_OF_BULLETS: 10,
    MINIMUM_VALUE: 1,
    lastGroupId: 5,
    openGroupModal: false,
    addingNewTaskMode: false,
    DEFAULT_TASK_VALUE: 5,
    toShowGroupsNavigation: false
  },
  mutations: {
    SET_CHOSEN_GROUP_ID (state, groupId) {
      state.chosenGroupId = groupId
    },
    Add_GROUP (state, groupName) {
      const group = {}
      group.id = state.lastGroupId + 1
      state.lastGroupId += 1
      group.name = groupName
      group.tasks = []
      state.groupsInfo.push(group)
    },
    INCREASE_SCORE (state, taskId) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
      const task = chosenGroupInfo.tasks.find(t => t.id === taskId)
      if (task.value < state.NUMBER_OF_BULLETS) {
        task.value += 1
        Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
      }
    },
    DECREASE_SCORE (state, taskId) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
      const task = chosenGroupInfo.tasks.find(t => t.id === taskId)
      if (task.value > state.MINIMUM_VALUE) {
        task.value -= 1
        Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
      }
    },
    ACTIVATE_HOVERING (state, { taskId, index }) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
      const task = chosenGroupInfo.tasks.find(t => t.id === taskId)
      task.hoveringStatus = true
      task.hoveringIndex = index
      Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
    },
    DEACTIVATE_HOVERING (state, taskId) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
      const task = chosenGroupInfo.tasks.find(t => t.id === taskId)
      task.hoveringStatus = false
      task.hoveringIndex = undefined
      Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
    },
    BULLET_CLICK (state, { taskId, index }) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
      const task = chosenGroupInfo.tasks.find(t => t.id === taskId)
      task.value = index
      Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
    },
    OPEN_ADD_GROUP_MODAL (state) {
      state.openGroupModal = true
    },
    CLOSE_ADD_GROUP_MODAL (state) {
      state.openGroupModal = false
    },
    REMOVE_GROUP (state, groupId) {
      const index = state.groupsInfo.findIndex(g => g.id === groupId)
      state.groupsInfo.splice(index, 1)
      if (state.chosenGroupId === groupId) {
        if (state.groupsInfo.length > 0) {
          state.chosenGroupId = state.groupsInfo[0].id
        } else {
          state.chosenGroupId = undefined
        }
      }
    },
    SET_ADDING_NEW_TASK_MODE (state) {
      state.addingNewTaskMode = true
    },
    ADD_NEW_TASK (state, { name, value }) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]

      let id = 1
      if (!isNil(chosenGroupInfo.tasks) && chosenGroupInfo.tasks.length) {
        id = chosenGroupInfo.tasks[chosenGroupInfo.tasks.length - 1].id + 1
      }
      const newTask = { id, name, value }
      chosenGroupInfo.tasks.push(newTask)
    },
    DONE_ADDING_NEW_TASK (state) {
      state.addingNewTaskMode = false
    },
    REMOVE_TASK (state, taskId) {
      const chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
      const chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
      const index = chosenGroupInfo.tasks.findIndex(t => t.id === taskId)
      chosenGroupInfo.tasks.splice(index, 1)
    },
    SHOW_GROUPS_NAVIGATION (state) {
      state.toShowGroupsNavigation = true
    },
    CLOSE_GROUPS_NAVIGATION (state) {
      state.toShowGroupsNavigation = false
    }
  },
  getters: {
    tasks: state => {
      if (isNil(state.chosenGroupId)) {
        return []
      } else {
        return state.groupsInfo.find(g => g.id === state.chosenGroupId).tasks
      }
    }
  },
  actions: {
    chooseGroup ({ commit }, groupId) {
      commit('SET_CHOSEN_GROUP_ID', groupId)
    },
    addGroup ({ commit }, groupName = 'GroupName') {
      commit('Add_GROUP', groupName)
    },
    increaseScore ({ commit }, taskId) {
      commit('INCREASE_SCORE', taskId)
    },
    decreaseScore ({ commit }, taskId) {
      commit('DECREASE_SCORE', taskId)
    },
    activateHovering ({ commit }, { taskId, index }) {
      commit('ACTIVATE_HOVERING', { taskId, index })
    },
    deactivateHovering ({ commit }, taskId) {
      commit('DEACTIVATE_HOVERING', taskId)
    },
    bulletClick ({ commit }, { taskId, index }) {
      commit('BULLET_CLICK', { taskId, index })
    },
    openAddGroupModal ({ commit }) {
      commit('OPEN_ADD_GROUP_MODAL')
    },
    closeAddGroupModal ({ commit }) {
      commit('CLOSE_ADD_GROUP_MODAL')
    },
    removeGroup ({ commit }, groupId) {
      commit('REMOVE_GROUP', groupId)
    },
    setAddingNewTaskMode ({ commit }) {
      commit('SET_ADDING_NEW_TASK_MODE')
    },
    addNewTask ({ commit }, { name, value }) {
      commit('ADD_NEW_TASK', { name, value })
    },
    doneAddingNewTask ({ commit }) {
      commit('DONE_ADDING_NEW_TASK')
    },
    addNewTaskAndChangeModeBack ({ dispatch }, { name, value }) {
      dispatch('addNewTask', { name, value })
      dispatch('doneAddingNewTask')
    },
    removeTask ({ commit }, taskId) {
      commit('REMOVE_TASK', taskId)
    },
    showGroupsNavigation ({ commit }) {
      commit('SHOW_GROUPS_NAVIGATION')
    },
    closeGroupsNavigation ({ commit }) {
      commit('CLOSE_GROUPS_NAVIGATION')
    }
  }
})
