var sv = 0; var list = [{n:"Lives Porkinbr",r:"Developer",iv:"https://discord.gg/THsVSbCKEC",i:"pkb",desc:"Discord do youtuber PORKINBR, ditador, fanático religioso, cheiroso, e HYPE! APENAS!"},{n:"HeavenMC",r:"Admin",iv:"https://discord.gg/nKPgBwEUDR",i:"hvn",desc:"Discord do servidor HeavenMC, um servidor de Minecraft com uma comunidade incrível e uma staff muito dedicada!"},{n:"Tips For Discord",r:"Coordinator",iv:"https://discord.gg/nKPgBwEUDR",i:"tip",desc:"Conecte-se com várias pessoas importantes do Discord, como Admins, Donos e Moderadores de servidores grandes e ainda aprenda tudo sobre o discord!"},{n:"DetetiveYoutuber",r:"Developer",iv:"https://discord.gg/detetiveyoutube",i:"dyt",desc:"Discord do DetetiveYoutuber!"},{n:"Social Club",r:"Moderator",iv:"https://discord.gg/hY6gXg5682",i:"soc",desc:"Social Club, um incrível servidor para você interagir e fazer amizades"}]; setInterval(()=>{sv++;if(sv >= list.length){sv=0;};var s=list[sv];document.querySelector('.s-icon').src = `https://i.enigmaa.me/icon/si-${s.i}.webp`;document.querySelector('#title').innerText=s.n;document.querySelector('.s-role-text').innerHTML=s.r;document.querySelector('.s-btn').href=s.iv;document.querySelector('#desc').innerHTML=s.desc}, 5000);
