import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
config = {
  banner : {
    title : "A FREE AND SIMPLE LANDING PAGE",
    description:"Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!"
  },
  intro :{
    tagline:"SUCCESS",
    title:"How We Help You To Sell Your Product",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    blocks :
     [
      {
        tagline:"HTML5 &amp; CSS3",
        description:"Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico"
      },
      {
        tagline:"Easy to Use",
        description:"Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sitdetracto mediocrem disputationi"
      },
      {
        tagline:"Fully Responsive",
        description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum"
      },
      {
        tagline:"Parallax Effect",
        description:"Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum"
      }
    ]
  },
  client : {
    tagline:"TRUST",
    title : "Companies who use our services",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!"
  },
  content : {
    tagline:"BELIEVING",
    title : "Focusing On What Matters Most",
    description1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    description2:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae    dicta sunt explicabo.",
    description3:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!" 
  },

  pricing : {
    personal :
    {
        tagline : "Personal",
        title:"The standard version",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        list:
        [
          "5 Downloads","2 Extensions","Tutorials","Forum Support","1 year free updates"
        ]

    },
    student :
    {
        tagline : "Student",
        title:"The standard version",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        list:
        [
          "5 Downloads","2 Extensions","Tutorials","Forum Support","1 year free updates"
        ]

    },
    business :
    {
        tagline : "Business",
        title:"The standard version",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        list:
        [
          "5 Downloads","2 Extensions","Tutorials","Forum Support","1 year free updates"
        ]

    },
  },
  blogs :{
    
        tagline : "My Blogs",
        title:"The standard version",        
        posts:
        [
          {
            id:1, title:"Article1", author:"SKSK",image:"gallery-image-1.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:2, title:"Article2", author:"SKSK",image:"gallery-image-2.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:3, title:"Article3", author:"SKSK",image:"gallery-image-3.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:4, title:"Article4", author:"SKSK",image:"gallery-image-4.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:5, title:"Article5", author:"SKSK",image:"gallery-image-5.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },

          {
            id:6, title:"Article6", author:"SKSK",image:"gallery-image-1.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:7, title:"Article7", author:"SKSK",image:"gallery-image-2.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:8, title:"Article8", author:"SKSK",image:"gallery-image-3.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:9, title:"Article9", author:"SKSK",image:"gallery-image-4.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:10, title:"Article10", author:"SKSK",image:"gallery-image-5.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          },
          {
            id:11, title:"Article11", author:"SKSK",image:"gallery-image-5.jpg", description: "",
            publisheddate : "4/20/2020", excert:"This is summery of article1"
          }
        ]        
  }
};


  constructor() { }

  getbanner()
  {
    return this.config.banner
  }
  getintro()
  {
    return this.config.intro;
  }
  getclient()
  {
    return this.config.client;
  }
  getcontent()
  {
    return this.config.content;
  }
  getPricing()
  {
    return this.config.pricing;
  }
  getBlog()
  {
    return this.config.blogs;
  }
  
}
