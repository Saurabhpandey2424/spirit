import { render } from "ejs";

class event_handler{
    static my_event=(req,res)=>{
        res.render('event',{'title':'Upcoming events!'});
    }

    static event_2=(req,res)=>{
        res.render('home',{'title':'ok'});
    }
}

export default event_handler;