import sys
import io
import matplotlib
matplotlib.use('Agg')

import numpy
import matplotlib.pyplot as plt

numpy.random.seed(2)

def training_setting(x, y):
    train_x = x[:80]
    train_y = y[:80]

    test_x = x[80:]
    test_y = y[80:]

    plt.scatter(test_x, test_y)

    plt.scatter(test_x, test_y, color="blue", label="Dati originali")
    plt.title("Training set")
    plt.xlabel("X Axis")
    plt.ylabel("Y Axis")
    plt.legend()

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    plt.close()

    return img