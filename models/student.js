import mongoose from 'mongoose';

// mongoose.connect('mongodb+srv://alcione:1986@cluster0.g0udn.mongodb.net/grades?retryWrites=true&w=majority', 
// { useNewUrlParser: true,
// useUnifiedTopology: true  }).then(
//     console.log('Conectado ao MongoDB Atlas/Connected to MongoDB Atlas')).catch((err) => {
//         console.log(err);;
//     }
// );

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true
    },
    type: {
       type: String,
       required: true 
    },
    value: {
        type: Number,
        required: true,
        // valida nota
        // validate(value){
        //     if (value < 0){
        //         throw new Error('Valor inválido');
        //     }
        // },
        min: 0
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
})

const studentModel = mongoose.model('student', studentSchema, 'student');

// new studentModel({

//     name: 'Sandra Delícia',
//     subject: 'Historia',
//     type: 'Trabalho Pratico',
//     value: 70
// }).save().
// then(() => {
//     console.log('Documento inserido');
// }).catch((err) => {
//     console.log(err);
// });

export {studentModel}