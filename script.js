// headline
const headline_display_container = document.getElementById('headline-display');
function add_headline() {
    let headlineStr = '' ;
    const headline_input = document.getElementById('enter-text');
    headlineStr += '<h1 id= "headline">${headline_input.vallue}</h1>';
}
add_headline();
// the form input
const display_target = document.getElementById('headline');
function update_font_size() {
    const sizeInput = document.getElementById('input-size');
    display_target.style.fontSize = parseInt(sizeInput.value) + 'px';
}
function update_font_family() {
    const fontfamily_input = document.getElementById('select-font');
    display_target.style.fontfamily = fontfamily_input.value;
}
function update_bg_color() {
    const bg_color_input = document.getElementById('input-bg-color');
    display_target.style.backgroundColor = bg_color_input.value;
}
function update_color() {
    const color_input = document.getElementById('input-color');
    display_target.style.Color = color_input.value;
}
function update_headline() {
    const headline_input = document.getElementById('enter-text');
    display_target.innerHTML = headline_input.value;
}
// updating
update_font_size();
update_font_family();
update_bg_color();
update_color();
update_headline();

// handling
const data_input = document.getElementById('data-input');
data_input.onchange = function (e) {
    show_data_output();
    if (e.target && e.target.id === 'input-size') {
        update_font_size();
    } else if (e.target && e.target.id === 'select-font') {
        update_fontfamily();
    } else if (e.target && e.target.id === 'input-color') {
        update_color();
    } else if (e.target && e.target.id === 'input-bg-color') {
        update_bg_color();
    }
}
const headline_input = document.getElementById('enter-text');
headline_input.addEventListener('input', update_headline);