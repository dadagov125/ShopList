import React, {Component} from 'react';
import {Text, View, Button} from 'native-base'
import {writeTest} from '../store/actions/test'
import {connect} from 'react-redux'

 class Test extends Component {


	render() {
		console.log(this.props)
		return (<View>

			<Button onPress={()=> this.props.write() }  >
				<Text>
					Нажми
				</Text>
			</Button>

			<Text>
				{this.props.text}
			</Text>
		</View>)

	}


}

const mapStateToProps=(rootState)=>{
	return {
		text:rootState.test.text
	}
};

const mapDispatchToProps=(dispatch)=>{
	return {
		write(){
			dispatch(writeTest("Новый текст"))
		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);

