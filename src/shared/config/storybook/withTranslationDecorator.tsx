import { StoryContext, StoryFn } from "@storybook/react";
import { Suspense, useEffect } from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

import { Spinner } from "shared/ui/spinner";

export const withTranslationDecorator = (
  Story: StoryFn,
  context: StoryContext
) => {
  const { locale } = context.globals;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<Spinner />}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
