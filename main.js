
document.getElementById(`getCss`).onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open(`GET`,`./1.css`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log(`CSS `+request.response)
            let css = document.createElement(`style`)
            css.innerText = request.response
            let head = document.querySelector(`head`)
            head.appendChild(css)
        }
    }
    request.send()
}
document.getElementById(`getJs`).onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open(`GET`,`./2.js`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status >= 200 && request.status <300){
            console.log(`JS `+request.response)
            let body = document.querySelector(`body`)
            let js = document.createElement(`script`)
            js.innerHTML = request.response
            body.appendChild(js)
        }
    }
    request.send()
}
document.getElementById(`getHtml`).onclick = () => {
    const request = new XMLHttpRequest()
    request.open(`GET`,`./3.html`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(`HTML `+request.response)
            let div = document.createElement(`div`)
            div.innerHTML = request.response
            test.appendChild(div)
        }
    }
    request.send()
}
document.getElementById(`getXml`).onclick = () => {
    const request = new XMLHttpRequest()
    request.open(`GET`,`./4.xml`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(`XML `+request.responseXML)
            let dom = request.responseXML.getElementsByTagName(`warning`)[0].textContent
            let div = document.createElement(`div`)
            div.innerText = dom.trim()
            test.appendChild(div)
        }
    }
    request.send()
}
document.getElementById(`getJson`).onclick = () => {
    const request = new XMLHttpRequest()
    request.open(`GET`,`./5.json`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            console.log(`JSON `+request.response)
            let obj = JSON.parse(request.response)
            let span = document.createElement(`span`)
            span.innerText = obj.id
            test.appendChild(span)
        }
    }
    request.send()
}
let n = 1
document.getElementById(`getPage`).onclick = () => {
    const request = new XMLHttpRequest()
    request.open(`GET`,`./db${n+1}.json`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const array = JSON.parse(request.response)
            array.forEach(items =>{
                let li = document.createElement(`li`)
                li.innerText = items.id
                ul.appendChild(li)
            })
            n++
        }
    }
    request.send()
}