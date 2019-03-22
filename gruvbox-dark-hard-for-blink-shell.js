black       = '#1c1c1c';
red         = '#cc5b5b'; // red
green       = '#98971a'; // green
yellow      = '#d79921'; // yellow
blue        = '#458588'; // blue
magenta     = '#b16286'; // pink
cyan        = '#689d6a'; // cyan
white       = '#a89984'; // light gray
lightBlack  = '#928374'; // medium gray
lightRed    = '#fb4934'; // red
lightGreen  = '#b8bb26'; // green
lightYellow = '#fabd2f'; // yellow
lightBlue   = '#83a598'; // blue
lightMagenta= '#d3869b'; // pink
lightCyan   = '#8ec07c'; // cyan
lightWhite  = '#ebdbb2'; // white

t.prefs_.set('color-palette-overrides',
                 [ black , red     , green  , yellow,
                  blue     , magenta , cyan   , white,
                  lightBlack   , lightRed  , lightGreen , lightYellow,
                  lightBlue    , lightMagenta  , lightCyan  , lightWhite ]);

t.prefs_.set('cursor-color', 'rgba(235, 219, 178, 0.7)');
t.prefs_.set('foreground-color', lightWhite);
t.prefs_.set('background-color', black);