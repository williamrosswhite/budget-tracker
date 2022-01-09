<template>
  <div class="hello">
    <Header/>
    <MonthSelector/>
    <PieWheel/>
    <CategoryBreakdown/>
    <NewCategory/>
    <NewExpenseForm/>
    <ExhaustiveBreakdown/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MonthSelector from '@/components/MonthSelector'
import PieWheel from '@/components/PieWheel'
import CategoryBreakdown from '@/components/CategoryBreakdown'
import NewCategory from '@/components/NewCategory'
import NewExpenseForm from '@/components/NewExpenseForm'
import ExhaustiveBreakdown from '@/components/ExhaustiveBreakdown'

export default {
  name: 'Home',
  components: {
    Header,
    MonthSelector,
    PieWheel,
    CategoryBreakdown,
    NewCategory,
    NewExpenseForm,
    ExhaustiveBreakdown
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
