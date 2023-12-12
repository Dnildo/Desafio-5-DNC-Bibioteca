const app = express();
require('dotenv').config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


if (process.env.NODE_ENV !== 'test'){
    const swaggerFile = require('./swagger/swagger_output.json');
    app.get('/', (req, res) => { /*swagger.ignore = true */ res.redirect('/doc'); });
    app.use('/doc', authDocProducao, swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions));
    }
    
    routes(app);
    

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 5500;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}
