const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt = require('bcryptjs');
const bcryptSalt = process.env.BCRYPT_SALT;

const userSchema = new Schema({
	name: {
		type: String,
		default: "",
	},
	fullName: String,
	avatar: String,
	coverImg: String,
	yob: String,
	address: String,
	degree: String,
	phone: String,
	title: String,
	whatIDo: String,
	about: String,
	aboutDetailed: String,
	username: String,
	email: String,
	publicEmail: String,
	hobbies: [
		{
			type: Schema.Types.ObjectId,
			ref: "hobby"
		}
	],
	socials: [
		{
			type: Schema.Types.ObjectId,
			ref: "social",
		}
	],
	careers: {
		type: Object,
	},
	portfolios: {
		type: Object,
	},
	skills: {
		type: Object,
	}

	// phone: {
	// 	type: String,
	// 	default: "",
	// },
	// email: {
	// 	type: String,
	// 	// Figure out how to replace being unique
	// 	// unique: true,
	// },
	// messenger: {
	// 	type: String,
	// 	default: "",
	// },
	// password: {
	// 	type:String,
	// 	select: false,
	// },
	// isAdmin: {
	// 	type: Boolean,
	// 	default: false
	// },
	// avatar: String,
	// cover: String,
	// location: {
	// 	latitude: {
	// 		type: Number,
	// 		default: null,
	// 	},
	// 	longitude: {
	// 		type: Number,
	// 		default: null,
	// 	},
	// 	address: {
	// 		type: String,
	// 		default: '',
	// 	},
	// 	preview: {
	// 		type: String,
	// 		default: '',
	// 	},
	// 	streetNumber: {
	// 		type: String,
	// 		default: '',
	// 	},
	// 	street: {
	// 		type: String,
	// 		default: '',
	// 	},
	// 	city: {
	// 		type: String,
	// 		default: '',
	// 	},
	// 	zipCode: {
	// 		type: String,
	// 		default: '',
	// 	},
	// },
	// about: {
	// 	type: String,
	// 	default: "",
	// },
	// dob: {
	// 	type: Date,
	// 	default: null,
	// },
	// title: {
	// 	type: String,
	// 	default: "",
	// },
	// educations: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userEducation",
	// 	}
	// ],
	// experiences: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userExperience",
	// 	}
	// ],
	// facts: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userFact",
	// 	}
	// ],
	// portfolios: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userPortfolio",
	// 	}
	// ],
	// skills: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userSkill",
	// 	}
	// ],
	// socials: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userSocial",
	// 	}
	// ],
	// testimonials: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userTestimonial",
	// 	}
	// ],
	// volunteerings: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: "userVolunteering",
	// 	}
	// ],
	// token: String,
	// expiresIn: Date,
	// active: {
	// 	type: Boolean,
	// 	default: false,
	// },
	// lastActive: {
	// 	type: Date,
	// 	default: Date.now,
	// },
}, {timestamps: true, versionKey: false, collection: 'user'});
//
// // TODO: Replace the hash from other places to here
// userSchema.pre('save', async function(next) {
// 	if(!this.isModified('password')){
// 		return next();
// 	}
// 	this.password = await bcrypt.hash(this.password, Number(bcryptSalt));
// 	next();
// });

module.exports = mongoose.model('user', userSchema);
