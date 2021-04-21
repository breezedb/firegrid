import { IFieldComponentProps } from '@antlerengineering/form-builder';

import { makeStyles, createStyles, Grid, Typography } from '@material-ui/core';

import { useFiregridContext } from 'contexts/FiregridContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      border: `1px dashed ${theme.palette.divider}`,
      height: 56,
      padding: theme.spacing(0, 2),
    },

    customFieldType: {
      cursor: 'default',
      color: theme.palette.text.disabled,
    },

    code: { fontFamily: theme.typography.fontFamilyMono },
  })
);

export default function HiddenFieldType({
  field: { value },
  name,
}: IFieldComponentProps) {
  const classes = useStyles();

  const { formPreview } = useFiregridContext();
  if (formPreview) return null;

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      justify="center"
      className={classes.root}
    >
      <Grid item>
        <Typography variant="caption" className={classes.customFieldType}>
          Hidden Field
        </Typography>
        <Typography variant="body2">
          <span className={classes.code}>
            {name}: "{value}"
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}