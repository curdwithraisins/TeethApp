$(window).load(function () {
    document.body.onmousedown = Select;
});

var globalColor = {};
var globalId = '';

function Select(e) {
    var id = e.target.id;
    var app = document.getElementsByClassName('selectBox');
    app[0].innerHTML = '';
    if (id == '') {
        id = e.target.parentNode.id;
        $('#' + globalId).css({'fill': globalColor[id].color});
        globalColor = {};
        globalId = '';
    }
    else {
        var search = id.split('_');
        if (search[0] != 'back') {
            var obj = nameOfEvil[search[0]];
            globalId = id;
            globalColor = obj;
            Append(e, obj);
        }
    }
};

function Append(e, obj) {
    var item = [];

    $('.selectBox').css({'top': e.pageY, 'left': e.pageX});

    $.each(obj, function(key, value){
        item.push('<div style=\'background:' + value.color
            + ';\'></div><div>' + value.name + '</div>');
        $('<div/>',{id: key, html: item[key]}).appendTo('.selectBox');
    });

    return;
};

var nameOfEvil = {
    inchannel: [
        {color: '#EAC68C', name: 'Не выбрано'},
        {color: '#244532', name: 'Вскрытие абсцесса'},
        {color: '#754275', name: 'Гингивит'},
        {color: '#567842', name: 'Инъекция линкомицин'},
        {color: '#565772', name: 'Иссечение капюшона'},
        {color: '#134685', name: 'Мед. обработка кармана'}
    ],
    inswteeth: [
        {color: '#E89F8B', name: 'Не выбрано'},
        {color: '#FA0000', name: 'Остиомиелит'}
    ],
    topteeth: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#355256', name: 'Аттачмент'},
        {color: '#A57845', name: 'Кламмер'},
        {color: '#C64313', name: 'Коронка металлокерамическая'},
        {color: '#36189c', name: 'Простой бюгель'},
        {color: '#AB567C', name: 'Сложный бюгель'},
        {color: '#D245A3', name: 'Съемный протез'},
        {color: '#ACD462', name: 'Фасетка керамичсеская'},
        {color: '#34AD54', name: 'Фасетка металлокерамическая'},
        {color: '#3A3A6C', name: 'Шинирование'}

    ],
    root: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#547832', name: 'Культевая вкладка'},
        {color: '#454675', name: 'Штифт анкерный'},
        {color: '#302346', name: 'Штифт парапульпарный'},
        {color: '#346436', name: 'Штифт стекловолоконный'},
        {color: '#976824', name: 'Штифт углеродоволокнистый'}
    ],
    channel: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#374325', name: 'Временно пломбированный канал'},
        {color: '#364364', name: 'Мышьяк'},
        {color: '#865824', name: 'Переодонтит'},
        {color: '#979321', name: 'Пломбированный канал'},
        {color: '#324383', name: 'Пульпит'},
        {color: '#214245', name: 'Штифт гуттаперчевый'}
    ],
    top: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#134532', name: 'Кариес'},
        {color: '#184182', name: 'Пломба стеклоиномерная'},
        {color: '#4f1f34', name: 'Пломба фотополимерная'},
        {color: '#865833', name: 'Реставрация'},
        {color: '#578832', name: 'Старая пломба'}
    ],
    left: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#134532', name: 'Кариес'},
        {color: '#184182', name: 'Пломба стеклоиномерная'},
        {color: '#4f1f34', name: 'Пломба фотополимерная'},
        {color: '#865833', name: 'Реставрация'},
        {color: '#578832', name: 'Старая пломба'}
    ],
    bottom: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#134532', name: 'Кариес'},
        {color: '#184182', name: 'Пломба стеклоиномерная'},
        {color: '#4f1f34', name: 'Пломба фотополимерная'},
        {color: '#865833', name: 'Реставрация'},
        {color: '#578832', name: 'Старая пломба'}
    ],
    right: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#134532', name: 'Кариес'},
        {color: '#184182', name: 'Пломба стеклоиномерная'},
        {color: '#4f1f34', name: 'Пломба фотополимерная'},
        {color: '#865833', name: 'Реставрация'},
        {color: '#578832', name: 'Старая пломба'}
    ],
    center: [
        {color: '#FFFFFF', name: 'Не выбрано'},
        {color: '#134532', name: 'Кариес'},
        {color: '#184182', name: 'Пломба стеклоиномерная'},
        {color: '#4f1f34', name: 'Пломба фотополимерная'},
        {color: '#865833', name: 'Реставрация'},
        {color: '#578832', name: 'Старая пломба'}
    ]
};