import sys
import io
import matplotlib
matplotlib.use('Agg')

import matplotlib.pyplot as plt
from scipy import stats

def linear_regression(x, y):
    slope, intercept, r, p, std_err = stats.linregress(x, y) 

    def intercept_function(x):
        return slope * x + intercept
    
    mymodel = list(map(intercept_function, x))
    
    plt.scatter(x, y, color="blue", label="Dati originali")
    plt.plot(x, mymodel, color="red", label="Regressione lineare")
    plt.title("Grafico con regressione lineare")
    plt.xlabel("X Axis")
    plt.ylabel("Y Axis")
    plt.legend()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    return img        