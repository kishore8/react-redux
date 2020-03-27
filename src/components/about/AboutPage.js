import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

class AboutPage extends React.Component {
    const 
    constructor(props){
        super(props);
        this.state = {
            arr : [{"id":25,"likes":4,"quote":"sample Quote 1","likedUsers":[2,5,67,8]},
                    {"id":26,"likes":2,"quote":"sample Quote 2","likedUsers":[3,5]}],
            user : {
                username: "mock_user",
                userId: 3
            }
        };
        library.add(fab, faCheckSquare, faHeart)
    }


    // componentDidMount = () =>{
    //     debugger;
    // }
    
    //addButton()
    compare = (a,b) =>{
            if ( a.likes < b.likes ){
              return 1;
            }
            if ( a.likes > b.likes ){
              return -1;
            }
            return 0;
    }
    handleClick = (clickedQuote) =>{
        let sampleArr = [...this.state.arr];
        if(clickedQuote == 'A'){
            this.setState({
                arr: this.state.arr.concat({"id":33,"likes":22,"quote":"sample Quote 3","likedUsers":[5]}),
              });
              return;
        } else if(clickedQuote == 'S'){
            var sortedArr = sampleArr.sort(this.compare); 
            this.setState({arr: sortedArr});
        } else{
            
            let foundClickedQuote = '';
            for(let val of sampleArr){
                if(val.id == clickedQuote.id){
                    foundClickedQuote = val;
                }
            } 
            if(clickedQuote.likedUsers.indexOf(this.state.user.userId) == -1){
                foundClickedQuote.likedUsers.push(this.state.user.userId);
                foundClickedQuote.likes++ ;
            } else{
                for(let val of foundClickedQuote.likedUsers){
                    if(this.state.user.userId == val){
                        foundClickedQuote.likedUsers.splice(foundClickedQuote.likedUsers.indexOf(val),1);
                        foundClickedQuote.likes-- ;
                    }
                }
            }
            
        }
        this.setState(sampleArr);
    }


    deleteHandler = (quoteToDelete) =>{
        let sampleArr = [...this.state.arr];
        for(let i=0;i<sampleArr.length;i++){  
            if(sampleArr[i].id == quoteToDelete.id){
               sampleArr.splice(i,1); 
            }
        }
        this.setState(x => ({
            arr: sampleArr
        }));x
    }


    render = () => {
        
        return (
            <div>
                <div className="button-Cls">
                <button className="btn btn-dark" onClick={() => this.handleClick('A')}>Add New Quote</button>
            { this.state.arr.length > 1  ? <button className="btn btn-dark"  onClick={() => this.handleClick('S')}>Sort By Most Liked</button> : null}
                </div>
                
            <div className="Mock">
                 {
                 (this.state.arr.length > 0 ? 
                    
                    this.state.arr.map(items =>(
                        <div className="quotes" key={items.id}>
                            {items.quote}
                     <div>
                         
                         {
                            (items.likedUsers.indexOf(this.state.user.userId) != -1) ? 
                            <div><FontAwesomeIcon onClick={() => this.handleClick(items)} className="fontAwesome handIcon" icon ="heart"/> {items.likes}</div> :
                            <div onClick={() => this.handleClick(items)}><FontAwesomeIcon className="handIcon" icon ="heart"/> {items.likes}</div>
                         }
                         
                        </div>
                        <div>
                            <button className="btn btn-danger " onClick={() => this.deleteHandler(items)}> Delete</button>
                        </div>
                        </div>          
                    )) 
                    :
                    <p>No Quotes to display</p>
                    
                    
                    
                    
                    
                    )    
                
            }
            </div>
            </div>
            
           
               
        );
    }
}


export default AboutPage;