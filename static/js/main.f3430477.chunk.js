(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/services-dinein.f7b75496.svg"},function(e,a,t){e.exports=t.p+"static/media/services-takeout.5751399f.svg"},function(e,a,t){e.exports=t.p+"static/media/services-reserved.65b48c97.svg"},function(e,a,t){e.exports=t.p+"static/media/services-bar.45a4cd9c.svg"},function(e,a,t){e.exports=t.p+"static/media/quote-start.da234555.svg"},function(e,a,t){e.exports=t.p+"static/media/quote-end.04d59842.svg"},function(e,a,t){e.exports=t(35)},,,,,,function(e,a,t){},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(14),c=t.n(r),s=(t(28),t(3)),o=t(4),l=t(6),m=t(5),d=t(7),u=t(39),p=t(36),h=t(38),g=t(15),v=function(e){var a;return a=e.hoverState?{width:e.hoverState.width,left:e.hoverState.left}:{width:e.defaultState.width,left:e.defaultState.left},i.a.createElement("div",{className:"underline",style:a})},f=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).hamburgerActive=function(e){t.setState(function(e){return{isHamActive:!e.isHamActive}})},t.handleMouseEnter=function(e){var a=e.target.getBoundingClientRect();t.setState({hoverState:{width:a.width,left:a.left}})},t.handleMouseLeave=function(e){t.setState({hoverState:!1})},t.handleClick=function(e){var a=e.target.getBoundingClientRect();t.setState({defaultState:{width:a.width,left:a.left}})},t.componentDidMount=function(){setTimeout(function(){var e=document.querySelector(".main-nav .active").getBoundingClientRect();t.setState({defaultState:{width:e.width,left:e.left}})},1e3)},t.state={isHamActive:!1,defaultState:{width:"",left:""}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:this.state.isHamActive?"hamburger__menu active":"hamburger__menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(h.a,{exact:!0,to:"/",onClick:this.hamburgerActive},"Home")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/about",onClick:this.hamburgerActive},"About")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/menu/appetizers",onClick:this.hamburgerActive},"Menu")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/bar",onClick:this.hamburgerActive},"Bar")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/reservation",onClick:this.hamburgerActive},"Reservation")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/contact",onClick:this.hamburgerActive},"Contact")))),i.a.createElement("nav",{className:"heronav "+(this.props.darkTheme?" heronav-solidbg":"")+(this.state.isHamActive?" heronav-ham":"")},i.a.createElement("div",{className:"heronav__container container"},i.a.createElement(g.a,{to:"/",className:"heronav__logo"},"Wild Tiger"),i.a.createElement("div",{className:"hamburger hamburger--3dx "+(this.state.isHamActive?"is-active":""),onClick:this.hamburgerActive,tabIndex:"0"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"}))),i.a.createElement("ul",{className:"main-nav",onMouseLeave:this.handleMouseLeave},i.a.createElement("li",null,i.a.createElement(h.a,{exact:!0,to:"/",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter},"Home")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/menu",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter},"Menu")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/bar",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter},"Bar")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/gallert",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter},"Gallery")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/reservation",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter},"Reservation")),i.a.createElement("li",null,i.a.createElement(h.a,{to:"/contact",onClick:this.handleClick,onMouseEnter:this.handleMouseEnter},"Contact")),i.a.createElement(v,{defaultState:this.state.defaultState,hoverState:this.state.hoverState})))))}}]),a}(n.Component),b=function(e){return i.a.createElement("header",{className:e.bg_class},i.a.createElement("div",{className:"hero shadow"},i.a.createElement("h3",{className:"hero__sub"},e.sub),i.a.createElement("h2",{className:"hero__main"},e.main),i.a.createElement("button",{className:"cta"},e.cta)))},E=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"block-head"},i.a.createElement("h4",{className:"block__heading"},e.heading),i.a.createElement("h3",{className:"block__subheading"},e.subheading)),i.a.createElement("div",{className:"block-body"},i.a.createElement("p",null,e.text,e.href&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement(g.a,{to:e.href,className:"block-link except-mobile"},e.href_text)))))},w=function(){var e={Monday:"11:00AM - 9:00PM",Tuesday:"11:00AM - 9:00PM",Wedneday:"11:00AM - 9:00PM",Thursday:"11:00AM - 9:00PM",Friday:"11:00AM - 10:00PM",Saturday:"12:00AM - 10:00PM",Sunday:"12:00AM - 9:00PM"},a=[];for(var t in e)a.push(i.a.createElement("div",{className:"schedule__timings-row",key:t},i.a.createElement("span",{className:"day"},t),i.a.createElement("span",{className:"time"},e[t])));return i.a.createElement("div",{className:"schedule"},i.a.createElement("h5",{className:"schedule__heading"},"We are open"),i.a.createElement("h5",{className:"schedule__subheading"},"7 days a week"),a)},k=t(16),y=t.n(k),N=t(17),_=t.n(N),S=t(18),C=t.n(S),$=t(19),T=t.n($),M=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"services"},i.a.createElement("h5",{className:"services__heading"},"Services We Offer"),i.a.createElement("div",{className:"services__icons"},i.a.createElement("div",{className:"service-wrapper"},i.a.createElement("div",{className:"service-icon"},i.a.createElement("img",{src:y.a,alt:"Dine-In"})),i.a.createElement("span",null,"Dine-In")),i.a.createElement("div",{className:"service-wrapper"},i.a.createElement("div",{className:"service-icon"},i.a.createElement("img",{src:_.a,alt:"Take-Out"})),i.a.createElement("span",null,"Take-Out")),i.a.createElement("div",{className:"service-wrapper"},i.a.createElement("div",{className:"service-icon"},i.a.createElement("img",{src:C.a,alt:"Reservations"})),i.a.createElement("span",null,"Reservations")),i.a.createElement("div",{className:"service-wrapper"},i.a.createElement("div",{className:"service-icon"},i.a.createElement("img",{src:T.a,alt:"Bar"})),i.a.createElement("span",null,"Bar")))))},x=t(20),O=t.n(x),j=t(21),B=t.n(j),A=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).generateCarousel=function(){var e={width:"".concat(100/t.state.testimonies.length,"%")};return t.state.testimonies.map(function(a,t){return i.a.createElement("div",{className:"carousel__slide",style:e,key:a.name+a.date},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 offset-1"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author__rating"},i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star checked"})),i.a.createElement("img",{className:"author__image",src:a.img,alt:"Irma Willis"}),i.a.createElement("div",{className:"author__details"},i.a.createElement("span",{className:"author__name"},a.name," | ",a.profession),i.a.createElement("span",{className:"author__date"},a.date))),i.a.createElement("p",{className:"author__testimony"},i.a.createElement("span",{className:"quote quote-start"},i.a.createElement("img",{src:O.a,alt:"quote start"})),a.review,i.a.createElement("span",{className:"quote quote-end"},i.a.createElement("img",{src:B.a,alt:"quote end"})))))))})},t.setTab=function(e){var a=e.target.dataset.index;t.setState({activeTab:+a})},t.generateControls=function(){return t.state.testimonies.map(function(e,a){return i.a.createElement("div",{className:"dot"+(t.state.activeTab===a?" active":""),key:e.name+e.date+" control","data-index":a,onClick:t.setTab})})},t.componentDidMount=function(){t.carouselInterval=setInterval(function(){t.setState(function(e){return{activeTab:(e.activeTab+1)%e.testimonies.length}})},5e3)},t.componentWillUnmount=function(){clearInterval(t.carouselInterval)},t.state={testimonies:[{name:"Irma Willis",img:"https://randomuser.me/api/portraits/women/65.jpg",profession:"Food Blogger",date:"14th Feb, 2019",rating:3,review:"This is the first time I've been at this place and I would definitely recommended it! Usually my go-to place is Thai Wok Kitchen over on Fourth Plain Blvd., but I wanted to give this place a shot. I ordered the pot stickers, Larb, and a side of steamed rice while my other friends ordered Pad Thai."},{name:"Lindsay B.",img:"https://s3-media3.fl.yelpcdn.com/photo/N5JtFVTK5fh9kChK2y-dsQ/90s.jpg",profession:"Foodie",date:"9th Oct, 2018",rating:5,review:"Great spot. I can tell the food is fresh. Seriously, you NEED to try their iced coffee or iced tea. It's freaking CRAZY GOOD. Very sweet, but delicious. The food is great too, the pineapple fried rice and soups are amazing. Keep it coming, guys!"},{name:"Cindy H.",img:"https://randomuser.me/api/portraits/women/96.jpg",profession:"Journalist",date:"7th Oct, 2018",rating:5,review:"Every time we've come to Wild Tiger we've been impressed.  The servers are friendly, hospitable, and helpful. The atmosphere is comfortable and decorated nicely without being over done. Food is delicious. We've never had anything we haven't liked. We've been to many Thai restaurants, and the Wild Tiger consistently has great food."}],activeTab:0},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={transform:"translateX( ".concat(-100/this.state.testimonies.length*this.state.activeTab,"% )"),width:"".concat(100*this.state.testimonies.length,"%")};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"carousel"},i.a.createElement("div",{className:"carousel__slider",style:e},i.a.createElement(this.generateCarousel,null)),i.a.createElement("div",{className:"carousel__controls"},i.a.createElement(this.generateControls,null))))}}]),a}(n.Component),R=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState({email:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),alert("Form Submitted: "+t.state.email)},t.state={name:"",email:""},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"block-head"},i.a.createElement("h4",{className:"block__heading"},"Subscribe"),i.a.createElement("h3",{className:"block__subheading"},"Newsletter")),i.a.createElement("div",{className:"block-body vAlign"},i.a.createElement("p",null,"Be the first one to know about our newest menu items & latest offers.",i.a.createElement("br",null),i.a.createElement("br",null),"More Food. Less Money. Commence Mouthwatering."),i.a.createElement("input",{type:"text",placeholder:"Enter your e-mail here",value:this.state.value,onChange:this.handleChange}),i.a.createElement("button",{className:"cta cta-sub",onClick:this.handleSubmit},"Subscribe Now")))}}]),a}(n.Component),F=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"container"},"This is the footer"),i.a.createElement("div",{className:"credits"},"Under Construction by\xa0",i.a.createElement("a",{href:"https://github.com/DivyanshBatham",target:"_blank",rel:"noopener noreferrer"},"!NotCurious")))},P=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{sub:"We Serve Fresh & Delicious",main:"Laotian & Thai Cuisines",cta:"Hungry? Reserve your spot.",bg_class:"home"}),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-7 vAlign"},i.a.createElement("div",{className:"block-head"},i.a.createElement("h4",{className:"block__heading"},"Discover"),i.a.createElement("h3",{className:"block__subheading"},"Our Story")),i.a.createElement("div",{className:"block-body-columns"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus. Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras vitae porta diam. Cras nec dictum orci. Quisque at malesuada nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer exest, scelerisque ut enim in, faucibus venenatis neque. ",i.a.createElement("br",null),i.a.createElement("br",null),"Vivamus finibus dapibus nisi, vitae condimentum lacus. Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras vitae porta diam. Cras nec dictum orci. Quisque at malesuada nisl.",i.a.createElement("br",null),i.a.createElement(g.a,{to:"/",className:"block-link except-mobile"},"Read More")))),i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-5 vAlign"},i.a.createElement("div",{className:"widescreen-ratio outside"}),i.a.createElement(g.a,{to:"/",className:"block-link mobile-only"},"Read More"))))),i.a.createElement("section",{className:"dark-section"},i.a.createElement("div",{className:"container"},i.a.createElement(M,null))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-7 vAlign"},i.a.createElement(E,{heading:"Discover",subheading:"Our Menu",text:"For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.",href:"/menu",href_text:"View Full Menu"})),i.a.createElement("div",{className:"col-xs-12 col-sm-5 vAlign"},i.a.createElement("div",{className:"widescreen-ratio"},i.a.createElement("div",{className:"menu-grid"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))),i.a.createElement(g.a,{to:"/",className:"block-link mobile-only"},"View Full Menu"))),i.a.createElement("div",{className:"row mt-5rem flex-colrev"},i.a.createElement("div",{className:"col-xs-12 col-sm-5 vAlign"},i.a.createElement("div",{className:"widescreen-ratio bar"}),i.a.createElement(g.a,{to:"/",className:"block-link mobile-only"},"View Bar")),i.a.createElement("div",{className:"col-xs-12 col-sm-7 vAlign"},i.a.createElement(E,{heading:"Chill in",subheading:"The Bar",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus.",href:"/",href_text:"View Bar"}))))),i.a.createElement("section",{className:"dark-section testimonials"},i.a.createElement(A,null)),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-sm-7 vAlign"},i.a.createElement(E,{heading:"Make a",subheading:"Reservation",text:"We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday.",href:"/",href_text:"Book your table"})),i.a.createElement("div",{className:"col-xs-12 col-sm-5 vAlign"},i.a.createElement("div",{className:"widescreen-ratio reservation"}),i.a.createElement(g.a,{to:"/",className:"block-link mobile-only"},"Book your table"))),i.a.createElement("div",{className:"row mt-5rem flex-colrev"},i.a.createElement("div",{className:"col-xs-12 col-sm-5 vAlign"},i.a.createElement("div",{className:"widescreen-ratio takeout"}),i.a.createElement(g.a,{to:"/",className:"block-link mobile-only"},"CALL +1 360 882 8887")),i.a.createElement("div",{className:"col-xs-12 col-sm-7 vAlign"},i.a.createElement(E,{heading:"Take Out",subheading:"Food",text:"We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday.",href:"/",href_text:"CALL +1 360 882 8887"}))))),i.a.createElement("section",{className:"map-section"},i.a.createElement("div",{className:"container"},i.a.createElement(w,null))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement(R,null))),i.a.createElement(F,null))}}]),a}(n.Component),W=t(40),q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).componentDidMount=function(){console.log("Menulist.js mounted")},t.componentDidUpdate=function(){console.log("Menulist.js updated")},t.state={},t.myRef=i.a.createRef(),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container foodmenu",ref:this.myRef},i.a.createElement("div",{className:"foodmenu__header"},i.a.createElement("div",{className:"foodmenu__category"},this.props.category),this.props.data.custom_text&&i.a.createElement("div",{className:"foodmenu__custom-text"},this.props.data.custom_text)),i.a.createElement("div",{className:"foodmenu__grid"},this.props.data.custom_menu&&i.a.createElement("div",{className:"foodmenu__custom_menu foodmenu__item"},this.props.data.custom_menu.map(function(e){return i.a.createElement("div",{className:"foodmenu__custom_menu-row"},i.a.createElement("span",null,e.item),i.a.createElement("span",{style:{alignSelf:"flex-end"}},e.price))})),this.props.data.items.map(function(a){return i.a.createElement("div",{className:"foodmenu__item new",key:e.props.category+a.name},i.a.createElement("div",{className:"foodmenu__item__heading"},i.a.createElement("span",null,a.name),a.custom_price&&i.a.createElement("span",null,a.custom_price),a.price&&i.a.createElement("div",null,a.original_price&&i.a.createElement("s",null,a.original_price),i.a.createElement("span",{className:"happy-price"},a.price))),a.description&&i.a.createElement("p",{className:"foodmenu__item__description"},a.description))}))))}}]),a}(n.Component),L={appetizers:{items:[{name:"Crispy Egg Rolls",price:"$4.5",description:"Silver noodle, dried mushroom, cabbage and carrot served with plum sauce."},{name:"Crispy Tofu",price:"$4.5",description:"Crispy Japanese tofu served with sweet chili sauce and peanut."},{name:"Fresh Rolls",price:"Tofu $4.50 Shrimp $6.00",description:"Bean spouts, lettuce, cilantro and soft rice noodle wrapped in fresh rice paper served with homemade peanut dipping sauce."},{name:"Crab Puffs",price:"$6.5",description:"Crispy wonton filled with imitation crab meat and cream cheese served with plum sauce."},{name:"Coconut Prawn",price:"$7.5",description:"Crispy prawn with coconut shaving served with plum sauce."},{name:"Wild Tiger Wings",price:"$8.5",description:"Marinated chicken wing, lightly breaded and fried until golden and crispy."},{name:"Satay Chicken",price:"$8.5",description:"Grilled marinated chicken skewers served with peanut sauce and cucumber sauce."},{name:"Pot Sticker",price:"$6.0",description:"Fried pork and cabbage dumpling served with ginger soy dipping sauce."},{name:"Golden Triangle",price:"$8.5",description:"Ground chicken and shrimp wrapped in a flour trailla deep-fried."},{name:"Steam Mussels",price:"$9.0",description:"Steam blue mussels with aromatic lemongrass and set in basil broth."},{name:"Crispy Calamari ",price:"$10.0",description:"Crispy calamari served with Siracha cream sauce."}]},soup:{custom_text:"*Customize your soup.",custom_menu:[{item:"Chicken, Tofu or Vegetable",price:"$8.95"},{item:"Beef or Pork",price:"$10"},{item:"Shrimp",price:"$12"},{item:"Seafood",price:"$14"}],items:[{name:"Tom Yum",description:"Spicy lemongrass broth soup with kaffir, tomato, mushroom, onion and lime juice."},{name:"Tom Kha",description:"Galangal, lemongrass, kaffir leaves, mushroom, cabbage, lime juice and coconut milk."},{name:"Shrimp Wonton Soup",price:"$8",description:"Shrimp wonton, shrimp, lettuce and bean sprout in clear broth soup."}]},salad:{items:[{name:"House Salad",price:"$7.0",custom_price:"(add grilled chicken $4)",description:"Crispy tofu, hardboiled egg, lettuce, cucumber, grape tomato, red onion and cilantro served with curry peanut sweet and sour sauce."},{name:"Papaya Salad",custom_price:"(add grilled shrimp $4)",price:"$8.0",description:"Shredded green papaya, Thai chili, green bean, tomato and peanut with spicy lime dressing."},{name:"Glass Noodle Salad",price:"$12.95",description:"Steam glass noodle, ground chicken, shrimp, squid, onion, red onion, mint, cilantro tossed with chili lime juice and sweet chili paste."},{name:"Larb",price:"$11.95",description:"Ground chicken roosted rice powder, red onion, mints, cilantro, tossed with chili lime juice. "},{name:"Beef Salad",price:"$12.0",description:"Grilled beef sirloin, tomato, cucumber, red onion, bell pepper, mints and cilantro with spicy lime dressing."}]},"stir-fried":{custom_text:"*Served with steamed rice. Substitude Brown Rice $1",custom_menu:[{item:"Chicken, Tofu or Vegetable",price:"$11"},{item:"Beef or Pork",price:"$12"},{item:"Shrimp",price:"$14"},{item:"Seafood",price:"$16"}],items:[{name:"Stir-fried Cashew Nut",description:"Onion, celery, bell pepper, carrot, and cashew nut in roasted sweet chili sauce"},{name:"Stir-fried Garlic",description:"Saut\xe9ed roasted garlic, onion, mushroom, and cilantro in black pepper sauce over a bed of broccoli."},{name:"Stir-fried Fresh Ginger",description:"Fresh ginger, mushroom, onion, carrot, and bell pepper."},{name:"Stir-fried Mixed Vegetable",description:"Stir-fried mixed vegetables in a work with garlic soy sauce."},{name:"Pra Ram",description:"Steamed mixed vegetables topped with house peanut sauce."},{name:"Stir-fried Basil",description:"Stir-fried ground chicken with bell peppers, green bean, onion and basil."},{name:"Stir-fried Eggplant",description:"Onion, bell pepper, eggplant, and basil in roasted sweet chili sauce."}]},curries:{custom_text:"*Served with steamed rice. Substitude Brown Rice $1",custom_menu:[{item:"Chicken, Tofu or Vegetable",price:"$11"},{item:"Beef or Pork",price:"$12"},{item:"Shrimp",price:"$14"},{item:"Seafood",price:"$16"}],items:[{name:"Red Curry",description:"Red curry with coconut milk, bamboo shoot, bell pepper, and basil."},{name:"Green Curry",description:"Green curry with coconut milk, bamboo shoot, bell pepper, eggplant and basil."},{name:"Yellow Curry",description:"Yellow curry with coconut milk, potato, onion, carrot and sprinkled with shallots."},{name:"Jungle Curry",custom_price:"(No coconut milk)",description:"Spicy Clear red curry with Thai herbs, fresh vegetables bamboo shoot, mushroom, bell pepper and basil."},{name:"Panang Curry",description:"A Panang curry with coconut milk, green bean, and bell peppers topped with ground peanut."},{name:"Mussaman Curry",description:"A mild slow cooked curry made with a blend of spices including nutmeg, cumin and cloves in coconut milk with onion, carrot, potato, and peanuts."}]},noodles:{custom_menu:[{item:"Chicken, Tofu or Vegetable",price:"$11"},{item:"Beef or Pork",price:"$12"},{item:"Shrimp",price:"$14"},{item:"Seafood",price:"$16"}],items:[{name:"Pad Thai",description:"Stir-fried wide-size rice in tamarind sauce with egg, bean sprout, and green onion served with chopped peanuts."},{name:"Drunken Noodle",description:"Stir-fried wide-size rice noodle with Thai chili, egg, bell pepper, broccoli, tomato and basil served with raw bean sprout."},{name:"Pad SEE-IEW",description:"Stir-fried wide-size rice noodle with egg, carrot, broccoli, and sweet soy sauce."},{name:"Pad Woon-Sen",description:"Stir-fried bean thread with mushroom, cabbage, onion, celery, carrot, grape tomato, bean sprout and egg."},{name:"Wild Tiger Noodle",description:"Stir-fried wide-size rice noodle with egg, cabbage, onion, and bean sprout in house soy sauce."}]},"noodles-soup":{items:[{name:"Tom Yum Noodle Soup",price:"$12.95",description:"Rice noodle or egg noodle with ground chicken, squid, shrimp, and mussle, bean sprout topped with chopped peanuts."},{name:"Clear Broth Noodle Soup",custom_price:"Chicken or tofu $11, Beef $12",description:"Clear broth small rice noodle soup with bean sprout, cilantro and green onion."},{name:"Khao Soi",custom_price:"Chicken or tofu $11, Beef $12",description:"Egg noodle, shallot, cilantro in curry soup topped with crispy egg noodle."}]},"fried-rice":{custom_menu:[{item:"Chicken, Tofu or Vegetable",price:"$11"},{item:"Beef or Pork",price:"$12"},{item:"Shrimp",price:"$14"},{item:"Seafood",price:"$16"}],items:[{name:"Traditional Thai Fried Rice",description:"Stir-fried rice with egg, onion, grape tomato, peas, and carrots."},{name:"Pineapple Fried Rice",description:"Stir-fried rice with curry powder, egg, pineapple, cashew nut, raisins, onion, grape tomato, pea and carrot."},{name:"Basil Fried Rice",description:"Stir-fried rice with egg, bell pepper, onion, and basil."}]},"house-specials":{custom_text:"*Served with steamed rice. Substitude Brown Rice $1",items:[{name:"Panang Curry Jumbo Prawn",price:"$17",description:"Grilled jumbo prawn topped with panang curry, bell pepper, green bean and asparagus."},{name:"Volcano Beef ",price:"$16",description:"Stir fried beef sirloin, tomato, onion, asparagus, bell pepper, pineapple, grape tomato in house specials sauce."},{name:"Three flavors Salmon",price:"$15",description:"Pan fried sockeye salmon, topped with three flavor dressing, green bean, onion and bell pepper topped with crispy basil."},{name:"Terriyaki Chicken",price:"$13",description:"Charcoal boiled chicken served with steamed vegtable and rice"},{name:"Crispy Duck Curry",price:"$21",description:"Red curry with half roasted duck, pineapple, bell pepper, grape tomatoes, lychee and basil."},{name:"Pumpkin Curry",custom_price:"(Chicken, Pork, Beef or Tofu $13, Grilled shrimp $17)",description:"Golden pumpkin, lychee, bell pepper and basil inred curry sauce."},{name:"Dungeness Crab Fried Rice",price:"$16",description:"Crab meat, jasmine rice, egg, onion, peas-carrots and grape tomato."},{name:"Lemongrass Chicken",price:"$13",custom_price:"(Add $1 for pad thai)",description:"Grilled marinated lemongrass chicken with steamed vegetable and topped with peanut sauce."}]},side:{items:[{name:"Steam Rice",price:"$1.5"},{name:"Sticky Rice",price:"$2"},{name:"Brown Rice",price:"$2"},{name:"Steamed Vegetables",price:"$3"},{name:"Steamed Noodles",price:"$3"},{name:"Steamed Meat",price:"$3"},{name:"Squid or Shrimp",price:"$4"},{name:"Peanut Sauce",price:"$2"}]},drinks:{items:[{name:"Soda (Refilled)",price:"$2"},{name:"Regular Iced Tea (Refilled)",price:"$2.50"},{name:"Thai Ice Coffee",price:"$3"},{name:"Thai Ice Tea",price:"$3"},{name:"Fresh Lime Juice with soda",price:"$3"},{name:"Mango Juice",price:"$3"},{name:"Coconut Juice",price:"$3"},{name:"Orange Juice",price:"$3"},{name:"Sparkling Water",price:"$3"},{name:"Hot Tea Cup",price:"$2"},{name:"Hot Tea Pot",price:"$4"}]},desserts:{items:[{name:"Coconut Ice Cream",price:"$4"},{name:"Mango Sticky Rice",price:"$6"},{name:"(Seasonal) + ice cream",custom_price:"+ $2"},{name:"Lava Cake",price:"$8"},{name:"A chocolate Mousse",price:"$8"}]}},I={food:{items:[{name:"Crispy Egg Rolls (2x)",price:"$3",original_price:"$9",description:"Silver noodle, dried mushroom, cabbage and carrot served with plum sauce."},{name:"Crispy Tofu (4x)",price:"$3",original_price:"$18",description:"Crispy Japanese tofu served with sweet chili sauce and peanut."},{name:"Fresh Rolls - Tofu (2x)",price:"$3.5",original_price:"$9",description:"Bean spouts, lettuce, cilantro and soft rice noodle wrapped in fresh rice paper served with homemade peanut dipping sauce."},{name:"Pot Sticker (4x)",price:"$3.5",original_price:"$24",description:"Fried pork and cabbage dumpling served with ginger soy dipping sauce."},{name:"Golden Triangle (2x)",price:"$4",original_price:"$17",description:"Ground chicken and shrimp wrapped in a flour trailla deep-fried."},{name:"Satay Chicken (2x)",price:"$4",original_price:"$17",description:"Grilled marinated chicken skewers served with peanut sauce and cucumber sauce."},{name:"Coconut Prawn",price:"$4.5",original_price:"$7.5",description:"Crispy prawn with coconut shaving served with plum sauce."},{name:"Wild Tiger Wings (2x)",price:"$5",original_price:"$8.5",description:"Marinated chicken wing, lightly breaded and fried until golden and crispy."},{name:"Pad Thai - Chicken",price:"$6.5",original_price:"$11",description:"Stir-fried wide-size rice in tamarind sauce with egg, bean sprout, and green onion served with chopped peanuts."},{name:"Drunken Noodle - Chicken",price:"$6.5",original_price:"$11",description:"Stir-fried wide-size rice noodle with Thai chili, egg, bell pepper, broccoli, tomato and basil served with raw bean sprout."}]},drinks:{items:[{name:"House Red Wine",price:"$4.5",description:"Merot, Cabernet Sauvignon"},{name:"House White Wine",price:"$4.5",description:"Chardonnay, Riesling"},{name:"Cocktail",price:"$6",description:"Mojito, Lemon Drop, Washington Apple, Margarita"},{name:"Well Drinks",price:"$4.5",description:"Ask the server for options"},{name:"Draft Beer",price:"$3.5",description:"Ask the server for options"}]}},D=function(){return i.a.createElement("div",{className:"happyhour"},i.a.createElement("h5",{className:"happyhour__heading"},"Happy Hour Menu"),i.a.createElement("p",{className:"happyhour__description"},"Visit us between 3PM-6PM or 8PM+ and get special discount offers on the menu *"),Object.keys(I).map(function(e){return i.a.createElement(q,{category:e,data:I[e]})}),i.a.createElement("p",{className:"happyhour__terms"},"* available for dine-in only, requires a minimum of one drink per person."))},G=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).fixHorizontalScroll=function(){var e=document.querySelector(".foodmenu__nav a.active").offsetLeft,a=document.querySelector(".heronav__logo").offsetLeft;document.querySelector(".foodmenu__nav").scrollLeft=e-a},t.scrollToMe=function(){},t.state={menu:{}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.setState({menu:L})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{sub:"Browse our Delights",main:"Menu",cta:"Happy Hour menu",bg_class:"menu"}),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 offset-1"},i.a.createElement(E,{heading:"Discover",subheading:"Our Menu",text:"For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you."})))),i.a.createElement("div",{className:"scrollME"}),i.a.createElement("nav",{className:"foodmenu__nav"},i.a.createElement("div",{className:"container"},i.a.createElement("ul",null,Object.keys(this.state.menu).map(function(e){return i.a.createElement("li",{key:e},i.a.createElement(h.a,{to:"/menu/".concat(e)},e))})))),i.a.createElement(p.a,{exact:!0,path:"/menu",render:function(e){return i.a.createElement("p",null,"Matched")}}),i.a.createElement(p.a,{exact:!0,path:"/menu",render:function(e){return i.a.createElement(W.a,{to:"/menu/".concat(Object.keys(L)[0])})}}),i.a.createElement(p.a,{path:"/menu/:category",render:function(a){var t=a.match.params.category;return e.state.menu[t]?i.a.createElement(q,{category:a.match.params.category,data:e.state.menu[t]}):i.a.createElement(W.a,{to:"/menu/".concat(Object.keys(L)[0])})}})),i.a.createElement("section",{className:"dark-section"},i.a.createElement("div",{className:"container"},i.a.createElement(D,null))),i.a.createElement("section",null,i.a.createElement("div",{className:"container"},i.a.createElement(R,null))),i.a.createElement(F,null))}}]),a}(n.Component),H=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{sub:"Browse our Tables",main:"Reservation",cta:"Book Now",bg_class:"reservation-bg"}),i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement(E,{heading:"Book The",subheading:"Cushioned Dining",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus. Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras vitae porta diam. Cras nec dictum orci. Quisque at malesuada nisl. ",href:"/",href_text:"Book Now"})))))},V=(t(33),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).handleScroll=function(e){console.log("SCROLLING window.scrollY = ",window.scrollY);var a=window.scrollY>100;a!==t.state.darkTheme&&t.setState({darkTheme:a})},t.componentWillMount=function(){window.addEventListener("scroll",t.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.handleScroll)},t.state={darkTheme:!1},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,{basename:"/grip-wildtiger-client"},i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{darkTheme:this.state.darkTheme}),i.a.createElement(p.a,{exact:!0,path:"/",component:P}),i.a.createElement(p.a,{path:"/menu",component:G}),i.a.createElement(p.a,{path:"/reservation",component:H})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[22,2,1]]]);
//# sourceMappingURL=main.f3430477.chunk.js.map