$(document).ready(function(){
    var $txt = [`With our affiliate program, you can make money by referring clients to InvestPlan LTD investment platform. Promote our website by placing our banners 
    or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.`,`Our partner affiliate program applies to all of our members from the moment they sign up for an account with us simply share your referral link with friends, 
    and you’ll earn 9% commission at level first from their active deposit. Any additional investment made by your branch will create 3% commission at level 
    second and 1% commission at level third. Commission is credited to your account balance instantly, without any delays.`,`Regional Representatives provides you with the opportunity to earn up to 19% commission. Support and advertise our project in your region, become 
    our partner, and you will be financially awarded. An active deposit is needed for you to earn an affiliate commission.`];


    for(i in $txt){
        $("#partner .wrap .txt").append(`
            <p>${$txt[i]}</p>
        `);
    }


    var $box = [
        ["partner.svg","13%","Commission for Partners",`As an standard user, you are able to earn an incentive amount of 
        9% - 3% - 1% commission per invesment of your referrals. 
        Standard members are not required to have any active 
        investment, or account balance in order to be able to earn from 
        their referrals.`,"Get Started Now"],
        ["representative.svg","19%","Commission for Representatives",`You are able to become a global representative from all over the 
        world and take advantages of 12% - 4% - 2% - 1% referral 
        commission. In particular, you do not need an active deposit to 
        register for a regional representative. Please fill out the form 
        below.`,"Representative Form"]
    ];

    for(v of $box){
        $("#partner .commission").append(`
        <div class="box" style="background-image:url(./img/sub/${v[0]})">
            <h3><span>${v[1]}</span>${v[2]}</h3>
            <p>${v[3]}
            </p>
            <button>${v[4]}</button>
        </div>
        `);
    }

    var $comapny = ["m_01.jpg","m_02.jpg","m_03.jpg","m_04.jpg","m_05.jpg","m_06.jpg","m_07.jpg","m_08.jpg","m_09.jpg","m_10.jpg"];

    for(i in $comapny){
        $("#represent .wrap .cont ul").append(`<li style="background-image:url(./img/managers/${$comapny[i]})"><a href=""></a></li>`);
    }
});

