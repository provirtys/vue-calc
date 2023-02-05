import { defineStore } from "pinia"
import { ref, computed, watch, onMounted } from "vue"

export const useCalcStore = defineStore("calcStore", () => {
  const isDarkMode = ref(false)
  const action = ref("")
  const n1 = ref(0)
  const n2 = ref(0)
  const isInputStarted = ref(false)
  const showN2 = ref(false)
	const history = ref('')
	const equalPressed = ref(false)

  const result = computed(() => {
    return n2.value && showN2.value ? n2.value : n1.value ? n1.value : 0
  })

  const onClickSymbol = (sym) => {
    if (/^\d/g.test(sym)) {
      //Цифра
      if (action.value === "") {
        //Первое число
        if (!isInputStarted.value) {
          //Начало ввода
          n1.value = sym
          isInputStarted.value = true
        } else {
          //Продолжение ввода числа
          n1.value += sym
        }
      } else {
        showN2.value = true
        if (!isInputStarted.value) {
          //Начало ввода
          n2.value = sym
          isInputStarted.value = true
        } else {
          //Продолжение ввода числа
          n2.value += sym
        }
      }
    } else {
      //Не цифра (запятая или -1)
      sym === "-1" ? changeSign() : addFloating()
    }
  }

  const addFloating = () => {
    !showN2.value && !n1.value.includes(".")
      ? (n1.value = n1.value.concat("."))
      : !n2.value.includes(".")
      ? (n2.value = n2.value.concat("."))
      : null
  }

  const changeSign = () => {
    !showN2.value
      ? (n1.value = +n1.value * (-1).toString())
      : (n2.value = +n2.value * (-1).toString())
  }

  const onClickAction = (btn) => {
		if(n2.value && action.value.length && !equalPressed.value){
			onClickEqual()
		}
		equalPressed.value = false
    action.value = btn
    isInputStarted.value = false
  }

  const onClickPrecent = () => {
    showN2.value ? (n2.value /= 100) : (n1.value = 0)
  }

  const onClickEqual = () => {
		equalPressed.value = true
    showN2.value = false
		if(history.value.length){
			if(action.value.length){
				history.value += action.value + n2.value
			}
		}
		else{
			if(action.value.length){
				history.value += n1.value + action.value + n2.value 
			}
			else{
				history.value += n1.value
			}
		}
    switch (action.value) {
      case "+": {
        n1.value = (+n1.value * 10 + +n2.value * 10) / 10
        break
      }
      case "-": {
        n1.value = (+n1.value * 10 - +n2.value * 10) / 10
        break
      }
      case "*": {
        n1.value = (+n1.value * 10 * (+n2.value * 10)) / 100
        break
      }
      case "/": {
        n1.value = (+n1.value * 10) / (+n2.value * 10) / 10
        break
      }
      case "%": {
        n1.value = (+n1.value * 10) / (+n2.value * 10) / 10
        break
      }
    }
    n1.value = n1.value ? n1.value.toString() : n1.value
  }

  const onClickBack = () => {
    !showN2.value
      ? (n1.value = n1.value.toString().slice(0, -1))
      : (n2.value = n2.value.toString().slice(0, -1))
  }

  const onClickReset = () => {
    n1.value = 0
    n2.value = 0
    isInputStarted.value = false
    action.value = ''
		history.value = ''
  }

  const tabs = ref([
    {
      id: 1,
      label: "Calculator",
    },
    {
      id: 2,
      label: "Converter",
    },
  ])

  const activeTab = ref(tabs.value[0])

  const isOpen = ref(false)

  const converters = ref([
    {
      id: 1,
      label: "Объем",
      list: [
        {
          id: 1,
          label: "Литр",
          multiplier: 1,
        },
        {
          id: 2,
          label: "Миллилитр",
          multiplier: 1000,
        },
        {
          id: 3,
          label: "Кубический метр",
          multiplier: 0.001,
        },
      ],
    },
    {
      id: 2,
      label: "Длина",
      list: [
        {
          id: 1,
          label: "Метр",
          multiplier: 1,
        },
        {
          id: 2,
          label: "Километр",
          multiplier: 0.001,
        },
        {
          id: 3,
          label: "Сантиметр",
          multiplier: 100,
        },
      ],
    },
    {
      id: 3,
      label: "Масса",
      list: [
        {
          id: 1,
          label: "Килограм",
          multiplier: 1,
        },
        {
          id: 2,
          label: "Миллиграм",
          multiplier: 1000,
        },
        {
          id: 3,
          label: "Тонна",
          multiplier: 0.001,
        },
      ],
    },
  ])

  const fillConverters = () => {
    converters.value = converters.value.map(
      (conv) => (conv = { ...conv, valueFrom: 0, valueTo: 0 })
    )
  }

  const activeConverter = ref(false)

  const onClickConverter = (conv) => {
    activeConverter.value = conv.id === activeConverter.value.id ? false : conv
  }

  onMounted(() => {
    fillConverters()
  })

  return {
    isDarkMode,
    result,
    onClickSymbol,
    onClickReset,
    onClickBack,
    onClickAction,
    n1,
    n2,
    onClickEqual,
    activeTab,
    tabs,
    isOpen,
    onClickPrecent,
    converters,
    activeConverter,
    onClickConverter,
    history,
		action,
  }
})
