$(document).ready(function(){
    var $sec1_arr = [ //이미지,제목,내용
        ["if_vector_65_02_473778","What is a “InvestPlan”?","A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."],
        ["if_vector_65_07_473788","BREAKING DOWN “InvestPlan”","These groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."],
        ["if_vector_65_14_473802","Incredible Strategy & Analisys","In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."],
    ];

    var $sec1_case = "";
    for(i=0; i<$sec1_arr.length; i++){
        $sec1_case += `
        <div class="box">
            <img src="./img/${$sec1_arr[i][0]}.png" alt="">
            <h4>${$sec1_arr[i][1]}</h4>
            <p>${$sec1_arr[i][2]}</p>
        </div>
        `;
    }
    $("#sec1 .wrap .cont").html($sec1_case);


    var sec3_arr = [
        ["invest-01.jpg","Newyork in USA","Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security."],
        ["invest-02.jpg","Tokyo in Japan","Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for..."],
        ["invest-03.jpg","Sydney in Australia","The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ..."],
        ["invest-04.jpg","Istanbul in Turkey","If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be."],

    ];

    var $sec3 = `
    <div class="box">
        <div class="img"></div>
        <div class="text">
            <h4>newyork in ust</h4>
            <p>Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security.</p>
        </div>
        <div class="button">
            <button><img src="./img/arrow_right.png" alt=""></button>
        </div>
    </div>`;

    for(i=0; i<sec3_arr.length; i++){
        $("#sec3 .cont").append($sec3);
    }

    $("#sec3 .cont .box").each(function(i){
        $(this).find(".img").css("background-image",`url(./img/${sec3_arr[i][0]})`);
        $(this).find(".text h4").text(sec3_arr[i][1]);
        $(this).find(".text p").text(sec3_arr[i][2]);
    });



    var $sec5 = ["m_01.jpg","m_02.jpg","m_03.jpg","m_04.jpg","m_05.jpg","m_06.jpg","m_07.jpg","m_08.jpg","m_09.jpg","m_10.jpg",];

    for(i in $sec5){
        $("#sec5 .cont ul").append(`
            <li style="background-image:url(./img/managers/${$sec5[i]})"><a href=""></a></li>
        `);
    }


});