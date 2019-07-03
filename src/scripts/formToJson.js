export default function formToJson (elements) {
    return [].reduce.call(elements, (data, element) => { 
        data[element.name] = element.value;
        return data;
    }, {});
}                   