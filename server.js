
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// ROUTES

// PUBLIC
app.use('/auth', authRouter);

// PROTECTED
app.use(isSignedIn);

app.get('/protected', (req, res) => {
  try {
    const userPayload = req.user;

    res.status(200).json({ user: userPayload });
  } catch (error) {
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('The express app is ready!');
});
