import pandas as pd

def pivotTable(weather: pd.DataFrame) -> pd.DataFrame:
    return pd.crosstab(weather['month'],weather['city'],values=weather['temperature'],aggfunc='sum')