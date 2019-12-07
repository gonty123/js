let confirm = (title) => {
	class Content extends React.Component {
	    componentDidMount(){
		    this.props.success()
		}
	    render() {
		    return <div>{this.props.title}</div>
	    }
	}
    return new Promise(function(resolve, reject) {
		ReactDOM.render(
		    <Content title = {title} success={()=>{resolve(true);}}/>,
		    document.getElementById('comfirm')
		);
	});
}