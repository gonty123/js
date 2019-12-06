import React,{Component} from 'react'
class InputNumber extends Component {
  constructor(props){
		super(props)
		this.state = {
			innerValue: ''
		}
	}
	static defaultProps = {
		onChange: () => {}
	}
	get isControl(){
		return 'value' in this.props
	}
	get value() {
		if(this.isControl){
			return this.props.value
		} else {
			return this.state.innerValue
		}
	}
	render() {
		const {
			onChange,
		} = this.props
		return (
			<div>
				<input
					value={this.value||""}
					onChange={(e) => {
						if(!this.isControl){
							this.setState({
								innerValue: e.target.value
							})
						}
						typeof onChange === "function" && onChange(e);
					}}
				/>
			</div>
		)
	}
	componentDidMount() {
		this.setState({
			innerValue: this.props.defaultValue
		})
	}
}