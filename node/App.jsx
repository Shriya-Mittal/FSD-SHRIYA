console.log('hii')
const parent =document.getElementById('container');
const root=ReactDOM.createRoot(parent)
const h2=React.createElement('h2',{style:{color:'blue'}, },'Welcome to React Dev')
const li1=React.createElement('li',{},'java programming')
const li2=React.createElement('li',{},'c++ programming')

const ul=React.createElement('ul',{},[li1,li2])
const div=React.createElement('div',{},[h2,ul])
root.render(div)

