let langs=['C#','JavaScript','Angular'];
function printLangsLoop()
{    
    for(let i=0;i<langs.length;i++)
    {
        console.log(langs[i]);
    }
}

function printLangsFor()
{    
    for(let lang of langs)
    {
        console.log(lang);
    }
}

function printLangsForeach()
{
    langs.forEach(lang=>console.log(lang));
}

function printLangsForeachOne()
{
    const print= lang=>console.log('Hi ${lang}');
    langs.forEach(e=>print(e));
}